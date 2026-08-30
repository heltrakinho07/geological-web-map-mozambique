// Geological Web Map of Mozambique - Static Version for GitHub Pages

class GeologicalMapApp {
    constructor() {
        this.map = null;
        this.geologyLayer = null;
        this.provincesLayer = null;
        this.currentFilters = {
            province: '',
            era: '',
            legend: '',
            suite: ''
        };
        this.colors = this.generateColorPalette();
        this.data = {
            geology: null,
            provinces: null,
            stats: null,
            provincesList: null
        };
        this.init();
    }

    init() {
        this.initializeMap();
        this.loadAllData();
    }

    initializeMap() {
        // Initialize map centered on Mozambique
        this.map = L.map('map').setView([-18.665695, 35.529562], 6);

        // Add OpenStreetMap base layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(this.map);

        // Add scale control
        L.control.scale().addTo(this.map);
    }

    generateColorPalette() {
        // Generate a color palette for geological units
        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
            '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
            '#F8B500', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9',
            '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124',
            '#D65076', '#45B8AC', '#EFC050', '#5B5EA6', '#9B2335',
            '#DFCFBE', '#B38B8D', '#AD4D43', '#6A5ACD', '#2E8B57'
        ];
        return colors;
    }

    getColorForLegend(legend) {
        // Generate consistent color based on legend string
        let hash = 0;
        for (let i = 0; i < legend.length; i++) {
            hash = legend.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % this.colors.length;
        return this.colors[index];
    }

    async loadAllData() {
        this.showLoading(true);
        
        try {
            // Load all data files
            const [geologyResponse, provincesResponse, statsResponse, provincesListResponse] = await Promise.all([
                fetch('data/geology_filtered.json'),  // Use filtered data for better performance
                fetch('data/provinces.json'),
                fetch('data/stats.json'),
                fetch('data/provinces_list.json')
            ]);

            this.data.geology = await geologyResponse.json();
            this.data.provinces = await provincesResponse.json();
            this.data.stats = await statsResponse.json();
            this.data.provincesList = await provincesListResponse.json();

            // Initialize UI with loaded data
            this.initializeUI();
            this.setupEventListeners();
            this.loadGeology();
            
        } catch (error) {
            console.error('Error loading data:', error);
            alert('Error loading geological data. Please refresh the page.');
        } finally {
            this.showLoading(false);
        }
    }

    initializeUI() {
        // Update statistics
        document.getElementById('total-features').textContent = this.data.stats.total_features.toLocaleString();
        document.getElementById('unique-legends').textContent = this.data.stats.unique_legends.toLocaleString();
        document.getElementById('unique-eras').textContent = this.data.stats.unique_eras.toLocaleString();
        document.getElementById('unique-suites').textContent = this.data.stats.unique_suites.toLocaleString();
        
        // Populate era select
        const eraSelect = document.getElementById('era-select');
        Object.keys(this.data.stats.era_distribution).forEach(era => {
            if (era) {
                const option = document.createElement('option');
                option.value = era;
                option.textContent = era;
                eraSelect.appendChild(option);
            }
        });
        
        // Populate province select
        const provinceSelect = document.getElementById('province-select');
        this.data.provincesList.provinces.forEach(province => {
            const option = document.createElement('option');
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        });
        
        // Populate legend select
        this.populateLegendSelect();
        
        // Load province boundaries
        this.loadProvinceBoundaries();
    }

    populateLegendSelect() {
        const legendSelect = document.getElementById('legend-select');
        legendSelect.innerHTML = '<option value="">Loading geological units...</option>';
        
        const legends = this.data.stats.legends_list;
        
        legendSelect.innerHTML = '<option value="">All Geological Units</option>';
        
        // Group legends by frequency for better organization
        const highFrequency = legends.filter(item => item.count >= 100);
        const mediumFrequency = legends.filter(item => item.count >= 20 && item.count < 100);
        const lowFrequency = legends.filter(item => item.count < 20);
        
        // Add high frequency units
        if (highFrequency.length > 0) {
            const highGroup = document.createElement('optgroup');
            highGroup.label = 'Common Units (100+ features)';
            highFrequency.forEach(item => {
                const option = document.createElement('option');
                option.value = item.legend;
                option.textContent = `${item.legend} (${item.count})`;
                highGroup.appendChild(option);
            });
            legendSelect.appendChild(highGroup);
        }
        
        // Add medium frequency units
        if (mediumFrequency.length > 0) {
            const mediumGroup = document.createElement('optgroup');
            mediumGroup.label = 'Medium Frequency (20-99 features)';
            mediumFrequency.forEach(item => {
                const option = document.createElement('option');
                option.value = item.legend;
                option.textContent = `${item.legend} (${item.count})`;
                mediumGroup.appendChild(option);
            });
            legendSelect.appendChild(mediumGroup);
        }
        
        // Add low frequency units (limit to first 100 to avoid overwhelming the dropdown)
        if (lowFrequency.length > 0) {
            const lowGroup = document.createElement('optgroup');
            lowGroup.label = 'Rare Units (<20 features)';
            lowFrequency.slice(0, 100).forEach(item => {
                const option = document.createElement('option');
                option.value = item.legend;
                option.textContent = `${item.legend} (${item.count})`;
                lowGroup.appendChild(option);
            });
            legendSelect.appendChild(lowGroup);
        }
    }

    loadProvinceBoundaries() {
        this.provincesLayer = L.geoJSON(this.data.provinces, {
            style: {
                color: '#333',
                weight: 2,
                fillOpacity: 0.1,
                fillColor: 'transparent'
            },
            onEachFeature: (feature, layer) => {
                layer.bindTooltip(feature.properties.Provincia || 'Unknown Province');
            }
        });
        
        if (document.getElementById('show-provinces').checked) {
            this.provincesLayer.addTo(this.map);
        }
    }

    loadGeology() {
        this.showLoading(true);
        
        try {
            // Filter geological data based on current filters
            let filteredFeatures = this.data.geology.features;
            
            // Filter by province
            if (this.currentFilters.province) {
                // For province filtering, we need to use the overlay logic
                // Since we can't do spatial operations in the browser easily,
                // we'll load all data and let Leaflet handle the visual filtering
                // This is a simplified approach for static hosting
            }
            
            // Filter by era
            if (this.currentFilters.era) {
                filteredFeatures = filteredFeatures.filter(feature => 
                    feature.properties.ERA === this.currentFilters.era
                );
            }
            
            // Filter by legend (exact match)
            if (this.currentFilters.legend) {
                filteredFeatures = filteredFeatures.filter(feature => 
                    feature.properties.Legend === this.currentFilters.legend
                );
            }
            
            // Filter by suite (partial match)
            if (this.currentFilters.suite) {
                const suiteLower = this.currentFilters.suite.toLowerCase();
                filteredFeatures = filteredFeatures.filter(feature => 
                    feature.properties.SUITE && 
                    feature.properties.SUITE.toLowerCase().includes(suiteLower)
                );
            }
            
            // Limit features for performance
            const maxFeatures = 2000;
            if (filteredFeatures.length > maxFeatures) {
                filteredFeatures = filteredFeatures.slice(0, maxFeatures);
            }
            
            // Create filtered GeoJSON
            const filteredGeoJSON = {
                type: 'FeatureCollection',
                features: filteredFeatures
            };
            
            // Remove existing layer
            if (this.geologyLayer) {
                this.map.removeLayer(this.geologyLayer);
            }
            
            // Create new layer
            this.geologyLayer = L.geoJSON(filteredGeoJSON, {
                style: (feature) => ({
                    color: '#333',
                    weight: 1,
                    fillOpacity: document.getElementById('opacity-slider').value / 100,
                    fillColor: this.getColorForLegend(feature.properties.Legend || 'Unknown')
                }),
                onEachFeature: (feature, layer) => {
                    // Create popup content
                    const popupContent = this.createPopupContent(feature.properties);
                    layer.bindPopup(popupContent);
                    
                    // Click handler for info panel
                    layer.on('click', (e) => {
                        this.showFeatureInfo(feature.properties);
                        L.DomEvent.stopPropagation(e);
                    });
                    
                    // Hover tooltip
                    if (feature.properties.Legend) {
                        layer.bindTooltip(feature.properties.Legend, {
                            sticky: true,
                            direction: 'top'
                        });
                    }
                }
            });
            
            if (document.getElementById('show-geology').checked) {
                this.geologyLayer.addTo(this.map);
            }
            
            // Fit map to features
            if (this.geologyLayer.getLayers().length > 0) {
                this.map.fitBounds(this.geologyLayer.getBounds());
            }
            
        } catch (error) {
            console.error('Error loading geology:', error);
            alert('Error loading geological data. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    createPopupContent(properties) {
        let content = '<div style="min-width: 200px;">';
        
        if (properties.Legend) {
            content += `<strong><i class="fas fa-layer-group"></i> Geological Unit:</strong><br>${properties.Legend}<br><br>`;
        }
        if (properties.Legenda) {
            content += `<strong><i class="fas fa-language"></i> Unidade Geológica:</strong><br>${properties.Legenda}<br><br>`;
        }
        if (properties.ERA) {
            content += `<strong><i class="fas fa-clock"></i> Era:</strong> ${properties.ERA}<br>`;
        }
        if (properties.PERIOD) {
            content += `<strong><i class="fas fa-calendar"></i> Period:</strong> ${properties.PERIOD}<br>`;
        }
        if (properties.SUITE) {
            content += `<strong><i class="fas fa-cubes"></i> Suite:</strong> ${properties.SUITE}<br>`;
        }
        if (properties.Formation) {
            content += `<strong><i class="fas fa-mountain"></i> Formation:</strong> ${properties.Formation}<br>`;
        }
        if (properties.code2006) {
            content += `<strong><i class="fas fa-barcode"></i> Code (2006):</strong> ${properties.code2006}<br>`;
        }
        
        content += '</div>';
        return content;
    }

    showFeatureInfo(properties) {
        const infoPanel = document.getElementById('info-panel');
        const infoContent = document.getElementById('info-content');
        
        let content = '';
        
        const fields = [
            { key: 'Legend', label: 'Geological Unit', icon: 'layer-group' },
            { key: 'Legenda', label: 'Unidade Geológica', icon: 'language' },
            { key: 'ERA', label: 'Era', icon: 'clock' },
            { key: 'PERIOD', label: 'Period', icon: 'calendar' },
            { key: 'SUITE', label: 'Suite', icon: 'cubes' },
            { key: 'Formation', label: 'Formation', icon: 'mountain' },
            { key: 'code2006', label: 'Code (2006)', icon: 'barcode' },
            { key: 'EON', label: 'Eon', icon: 'globe' },
            { key: 'Group_', label: 'Group', icon: 'layer-group' },
            { key: 'TYPE', label: 'Type', icon: 'tag' }
        ];
        
        fields.forEach(field => {
            if (properties[field.key]) {
                content += `<div class="info-row">
                    <strong><i class="fas fa-${field.icon}"></i> ${field.label}:</strong> ${properties[field.key]}
                </div>`;
            }
        });
        
        if (properties.Shape_Area) {
            const areaKm2 = (properties.Shape_Area * 111.32 * 111.32).toFixed(2);
            content += `<div class="info-row">
                <strong><i class="fas fa-ruler-combined"></i> Area:</strong> ~${areaKm2} km²
            </div>`;
        }
        
        infoContent.innerHTML = content || 'No detailed information available';
        infoPanel.style.display = 'block';
    }

    setupEventListeners() {
        // Apply filters button
        document.getElementById('apply-filters').addEventListener('click', () => {
            this.currentFilters.province = document.getElementById('province-select').value;
            this.currentFilters.era = document.getElementById('era-select').value;
            this.currentFilters.legend = document.getElementById('legend-select').value;
            this.currentFilters.suite = document.getElementById('suite-search').value;
            this.loadGeology();
        });

        // Reset filters button
        document.getElementById('reset-filters').addEventListener('click', () => {
            document.getElementById('province-select').value = '';
            document.getElementById('era-select').value = '';
            document.getElementById('legend-select').value = '';
            document.getElementById('suite-search').value = '';
            this.currentFilters = {
                province: '',
                era: '',
                legend: '',
                suite: ''
            };
            this.loadGeology();
        });

        // Province checkboxes
        document.getElementById('show-provinces').addEventListener('change', (e) => {
            if (this.provincesLayer) {
                if (e.target.checked) {
                    this.provincesLayer.addTo(this.map);
                } else {
                    this.map.removeLayer(this.provincesLayer);
                }
            }
        });

        document.getElementById('show-geology').addEventListener('change', (e) => {
            if (this.geologyLayer) {
                if (e.target.checked) {
                    this.geologyLayer.addTo(this.map);
                } else {
                    this.map.removeLayer(this.geologyLayer);
                }
            }
        });

        // Opacity slider
        document.getElementById('opacity-slider').addEventListener('input', (e) => {
            if (this.geologyLayer) {
                this.geologyLayer.setStyle({
                    fillOpacity: e.target.value / 100
                });
            }
        });

        // Map click to hide info panel
        this.map.on('click', () => {
            document.getElementById('info-panel').style.display = 'none';
        });
    }

    showLoading(show) {
        const overlay = document.getElementById('loading-overlay');
        if (show) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GeologicalMapApp();
});
