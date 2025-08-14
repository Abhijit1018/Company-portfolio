#!/bin/bash

# 🚀 Company Portfolio Deployment Script
# This script automates the deployment process for Unix/Linux/Mac users

echo "🚀 Starting Company Portfolio Deployment..."

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi
echo "✅ Git is installed"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi
echo "✅ Node.js is installed"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi
echo "✅ npm is installed"

echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

echo ""
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Project built successfully"

echo ""
echo "📋 Next steps:"
echo "1. Create a GitHub repository"
echo "2. Update the homepage URL in package.json"
echo "3. Run these commands:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo "   git remote add origin https://github.com/[username]/[repo].git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo "4. Enable GitHub Pages in repository settings"
echo "5. Your site will be automatically deployed via GitHub Actions!"

echo ""
echo "🎉 Deployment preparation complete!"
echo "Check DEPLOYMENT.md for detailed instructions."
