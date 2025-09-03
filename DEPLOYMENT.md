# 🚀 Deployment Guide

This guide will help you deploy your company portfolio website to various platforms.

## 📋 Prerequisites

1. **GitHub Account** - You need a GitHub account
2. **Node.js & npm** - Ensure you have Node.js 18+ installed
3. **Git** - Make sure Git is installed on your system

## 🎯 GitHub Pages Deployment (Recommended)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `company-portfolio` or `your-company-name`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license (we already have these)

### Step 2: Update Homepage URL

In your `package.json`, update the homepage field:

```json
"homepage": "https://[your-username].github.io/[your-repo-name]"
```

Replace `[your-username]` with your actual GitHub username and `[your-repo-name]` with your repository name.

### Step 3: Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Company portfolio website"

# Add remote origin
git remote add origin https://github.com/[your-username]/[your-repo-name].git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Install Dependencies and Deploy

```bash
# Install gh-pages package
npm install

# Deploy to GitHub Pages
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: `https://[your-username].github.io/[your-repo-name]`

## 🔄 Automatic Deployment with GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site whenever you push to the main branch.

### How it works:
1. Push code to main branch
2. GitHub Actions automatically runs
3. Builds the project
4. Deploys to GitHub Pages
5. No manual deployment needed!

## 🌐 Alternative Deployment Options

### Netlify

1. **Connect Repository:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Deploy!

### Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts** and your site will be deployed!

### Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm i -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## 🛠️ Manual Build and Deploy

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The build folder will contain your production-ready files
# Upload the contents of the build folder to your hosting provider
```

## 🔧 Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check for TypeScript errors
   - Ensure all dependencies are installed
   - Run `npm run build` locally to test

2. **Site Not Loading:**
   - Check if GitHub Pages is enabled
   - Verify the homepage URL in package.json
   - Wait a few minutes for deployment to complete

3. **Styling Issues:**
   - Ensure Tailwind CSS is building correctly
   - Check if all CSS files are included in build

### Performance Tips:

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images before adding to project

2. **Code Splitting:**
   - Consider implementing React.lazy() for components
   - Use dynamic imports for heavy libraries

3. **Bundle Analysis:**
   ```bash
   npm install --save-dev webpack-bundle-analyzer
   # Add to package.json scripts for analysis
   ```

## 📱 Testing Your Deployment

After deployment, test:

- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Responsive design works on mobile
- [ ] Dark mode toggle functions
- [ ] Contact form works (if backend is set up)
- [ ] All animations and 3D effects load
- [ ] Performance is acceptable

## 🔄 Updating Your Site

To update your deployed site:

```bash
# Make your changes
# Commit and push to GitHub
git add .
git commit -m "Update: [description of changes]"
git push origin main

# GitHub Actions will automatically redeploy
# Or manually deploy:
npm run deploy
```

## 📞 Support

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/[your-username]/[your-repo-name]/issues) page
2. Review the [GitHub Actions logs](https://github.com/[your-username]/[your-repo-name]/actions)
3. Ensure all dependencies are up to date

## 🔧 Common Deployment Issues

### GitHub Actions Deploy Job Failing

If you see the build step succeeding but the deploy step failing in GitHub Actions:

1. **Check GitHub Pages Source**: Go to your repository Settings → Pages and ensure:
   - Source is set to "GitHub Actions" (not "Deploy from a branch")
   - The workflow has proper permissions

2. **Pull Request Deployments**: The deploy job only runs on pushes to main branch, not on pull requests. This is by design to prevent unauthorized deployments.

3. **Permissions**: Ensure your repository has the following permissions enabled:
   - Settings → Actions → General → Workflow permissions: "Read and write permissions"
   - The workflow file includes proper permissions for pages deployment

### Build Failing Locally

If `npm run build` fails:
```bash
# Try using npx instead
npx react-scripts build

# Check for missing dependencies
npm install

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

**Happy Deploying! 🎉**
