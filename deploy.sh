#!/bin/bash

echo "🚀 Deploying Pixel & Purpose to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📤 Ready for GitHub Pages deployment"
    echo ""
    echo "Next steps:"
    echo "1. Push this code to GitHub:"
    echo "   git add ."
    echo "   git commit -m 'Deploy to GitHub Pages'"
    echo "   git push origin main"
    echo ""
    echo "2. Go to GitHub repository Settings > Pages"
    echo "3. Set source to 'GitHub Actions'"
    echo "4. Add custom domain: pixelnpurpose.com"
    echo ""
    echo "5. Update GoDaddy DNS (see GITHUB_PAGES_SETUP.md)"
    echo ""
    echo "Your site will be live at: https://pixelnpurpose.com"
else
    echo "❌ Build failed!"
    exit 1
fi
