# 🌍 Geological Web Map of Mozambique

A professional WebGIS application for visualizing geological data of Mozambique. This interactive map provides comprehensive access to Mozambique's geological information with advanced filtering and analysis capabilities.

## 🌐 Live Demo

**[View Live Demo](https://YOUR_USERNAME.github.io/geological-web-map-mozambique/)**

## 🗺️ Features

### 🎯 Interactive Mapping
- **Real-time geological data visualization** (12,533 features)
- **Province boundaries overlay** (11 provinces)
- **Color-coded geological units** (515 unique units)
- **Interactive popups** with detailed information
- **Responsive design** for desktop and mobile

### 🔍 Advanced Filtering
- **Filter by Province** - Focus on specific regions
- **Filter by Geological Era** - Explore different time periods
- **Filter by Geological Unit** - Dropdown with organized units by frequency
- **Search by Suite** - Filter by geological suites
- **Layer opacity control** - Adjust transparency

### 📊 Statistical Dashboard
- **Total geological features** count
- **Unique geological units** overview
- **Geological eras** distribution
- **Geological suites** statistics
- **Real-time data updates**

### 🎨 Professional Design
- **Modern gradient interface** with purple theme
- **Responsive sidebar** with organized panels
- **Loading indicators** for better UX
- **Professional typography** and spacing
- **Icon-enhanced interface** using Font Awesome

## 📊 Data Coverage

- **12,533 geological units** covering all of Mozambique
- **515 unique geological formations** with detailed classifications
- **17 geological eras** from Archean to Cenozoic
- **29 geological suites** for regional grouping
- **Coordinate System**: EPSG:4326 (WGS 84)

## 🚀 Technology Stack

- **Leaflet.js** - Interactive mapping library
- **OpenStreetMap** - Base map tiles
- **GeoMoz Package** - Geological data library for Mozambique
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling with gradients

## 💼 Portfolio Project

This project demonstrates:
- **Full-stack web development** skills
- **Geospatial data processing** and visualization
- **Professional UI/UX design**
- **Real-time data interaction** and filtering
- **Performance optimization** techniques

Perfect for showcasing in a professional portfolio, especially for roles in:
- Geospatial development
- Web application development
- Data visualization
- GIS programming
- Scientific computing

## 📱 Usage Guide

### Basic Navigation
1. **Pan and zoom** using mouse or touch gestures
2. **Click on geological units** to see detailed information
3. **Hover over features** for quick tooltips
4. **Use the sidebar** to filter and control layers

### Filtering Data
1. **Select a province** from the dropdown to focus on a region
2. **Choose a geological era** to explore specific time periods
3. **Select a geological unit** from the organized dropdown:
   - Common Units (100+ features)
   - Medium Frequency (20-99 features)
   - Rare Units (<20 features)
4. **Search for suites** to find related geological formations
5. **Click "Apply Filters"** to update the map
6. **Click "Reset"** to clear all filters

### Layer Controls
1. **Toggle province boundaries** for administrative context
2. **Toggle geological units** to show/hide the main data
3. **Adjust opacity** slider to control layer transparency

## 🎯 Top Geological Units

1. **Eluvial floodplain mud** (1,674 units)
2. **Eluvial floodplain clayey sand** (1,331 units)
3. **Alluvium, sand, silt, gravel** (993 units)
4. **Granite** (292 units)
5. **Coastal sand dunes and beach sand** (224 units)

## 🛠️ Installation & Development

### For Local Development with Backend
If you want to run the full Flask backend version:

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/geological-web-map-mozambique.git
cd geological-web-map-mozambique

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Linux/Mac
# or venv\Scripts\activate  # On Windows

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py

# Access at http://localhost:5000
```

### For Static Version (GitHub Pages)
The static version is already configured and can be opened directly:
```bash
# Simply open index.html in your browser
open index.html  # On Mac
start index.html  # On Windows
xdg-open index.html  # On Linux
```

## 📂 Project Structure

```
geological-web-map-mozambique/
├── index.html              # Main HTML file (static version)
├── app.js                  # Main JavaScript (static version)
├── data/                   # Exported geological data
│   ├── geology.json       # All geological features
│   ├── provinces.json     # Province boundaries
│   ├── stats.json         # Statistical data
│   └── provinces_list.json # Province names
├── README.md              # This file
├── QUICK_DEPLOY.md        # Quick deployment guide
├── DEPLOYMENT.md          # Detailed deployment guide
└── .gitignore
```

## 🔄 Updating Data

To update the geological data:

```bash
# Run the export script (requires Python environment)
python export_data.py

# Copy updated data to data folder
cp static/data/* data/

# Commit and push changes
git add data/
git commit -m "Update geological data"
git push
```

## 🌐 Deployment

This project is deployed on **GitHub Pages** for free hosting. See:
- **[QUICK_DEPLOY.md](QUICK_DEPLOY.md)** - Quick 5-minute deployment guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Detailed deployment instructions

## 📝 License

This project uses data from the GeoMoz package, which is licensed under MIT. The application code is created for portfolio and educational purposes.

## 🙏 Credits

### Data Source
- **GeoMoz Package** - Geospatial data library for Mozambique
- **Author**: Hélder Gonçalves Félix Traquinho
- **License**: MIT
- **Repository**: https://github.com/geolithicamz-hub/geomoz

### Technologies
- **Leaflet.js** - Interactive mapping library
- **OpenStreetMap** - Map tiles and data
- **GeoMoz** - Geological data for Mozambique

## 📧 Contact

For questions or feedback about this application, please refer to the GeoMoz project documentation or contact through the Geolithica platform.

---

**Built with ❤️ for professional portfolio showcase**

**[View Live Demo](https://YOUR_USERNAME.github.io/geological-web-map-mozambique/)**
