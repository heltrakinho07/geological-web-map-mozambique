# GitHub Pages Deployment Guide

This guide will help you deploy the Geological Web Map of Mozambique to GitHub Pages as a static website.

## 🚀 Quick Deployment Steps

### 1. Prepare the Static Files

The static files are already prepared in the `static/` directory with exported data.

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `geological-web-map-mozambique`
3. Make it public (recommended for portfolio)
4. Don't initialize with README (we'll add our files)

### 3. Initialize Git and Push

```bash
cd geological-web-map-mozambique

# Initialize git repository
git init

# Create .gitignore if not exists
echo "*.pyc" >> .gitignore
echo "__pycache__/" >> .gitignore
echo "venv/" >> .gitignore
echo "*.pyc" >> .gitignore
echo ".DS_Store" >> .gitignore

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Geological Web Map of Mozambique"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/geological-web-map-mozambique.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **GitHub Pages** section
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)` or `/docs`
5. Click **Save**

### 5. Configure for Static Hosting

#### Option A: Root Directory Hosting (Simplest)

1. Move static files to root:
```bash
# Copy static files to root directory
cp -r static/* .
cp static/index_static.html index.html
cp static/app_static.js app.js
```

2. Update git and push:
```bash
git add .
git commit -m "Configure for GitHub Pages"
git push
```

#### Option B: Docs Directory Hosting (Recommended)

1. Create docs directory and move files:
```bash
mkdir -p docs
cp -r static/* docs/
cp static/index_static.html docs/index.html
cp static/app_static.js docs/app.js
```

2. Update GitHub Pages settings to use `/docs` folder

3. Commit and push:
```bash
git add .
git commit -m "Configure for GitHub Pages with docs folder"
git push
```

### 6. Access Your Website

After a few minutes, your site will be available at:
```
https://YOUR_USERNAME.github.io/geological-web-map-mozambique/
```

## 📁 Recommended File Structure for GitHub Pages

```
geological-web-map-mozambique/
├── index.html              # Main HTML file (static version)
├── app.js                  # Main JavaScript (static version)
├── data/                   # Exported geological data
│   ├── geology.json
│   ├── provinces.json
│   ├── stats.json
│   └── provinces_list.json
├── README.md              # Project documentation
├── DEPLOYMENT.md          # This file
└── .gitignore
```

## 🔧 Automated Deployment Script

I've created a script to automate the deployment process:

```bash
# Make the script executable
chmod +x deploy_to_github.sh

# Run the deployment script
./deploy_to_github.sh YOUR_USERNAME
```

## 📝 Important Notes

### Data File Sizes
- `geology.json` is large (~10-15MB) due to 12,533 geological features
- GitHub Pages has a 100MB file size limit per file
- If files are too large, consider:
  - Filtering data to include only major features
  - Using a CDN for large files
  - Implementing server-side filtering (requires backend)

### Performance Considerations
- Large GeoJSON files may take time to load on slow connections
- Consider adding a loading indicator (already included)
- Mobile users may experience slower performance

### Updates
When you want to update the data:
1. Run `python export_data.py` to regenerate the data files
2. Commit and push the changes
3. GitHub Pages will automatically rebuild

## 🎯 Alternative: Backend Hosting

If you prefer full backend functionality (Flask API), consider:

### Railway (Free Tier)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Render (Free Tier)
1. Create `render.yaml` configuration
2. Connect your GitHub repository
3. Render will auto-deploy on push

## 🆘 Troubleshooting

### Site not loading
- Check GitHub Pages settings are correct
- Wait a few minutes for deployment to complete
- Check the repository Actions tab for build errors

### Data not loading
- Verify data files are in the correct directory
- Check file paths in `app.js`
- Ensure files are committed to git

### Large file errors
- Compress JSON files using gzip
- Split data into smaller chunks
- Use external hosting for large files

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GeoJSON Format Specification](https://geojson.org/)
- [Leaflet.js Documentation](https://leafletjs.com/reference.html)

---

**Your Geological Web Map of Mozambique will be live and accessible to showcase in your portfolio!**
