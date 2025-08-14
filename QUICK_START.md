# 🚀 Quick Start - Deploy to GitHub Pages

## ⚡ 5-Minute Deployment

### 1. Run the Deployment Script
```bash
# Windows
powershell -ExecutionPolicy Bypass -File deploy-simple.ps1

# Unix/Linux/Mac
./deploy.sh
```

### 2. Create GitHub Repository
- Go to [GitHub](https://github.com)
- Click "New repository"
- Name it `company-portfolio` (or your preferred name)
- Make it **public** (required for free GitHub Pages)
- Don't initialize with README, .gitignore, or license

### 3. Update Homepage URL
In `package.json`, change:
```json
"homepage": "https://[your-username].github.io/[repo-name]"
```

### 4. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Company portfolio"
git remote add origin https://github.com/[username]/[repo-name].git
git branch -M main
git push -u origin main
```

### 5. Enable GitHub Pages
- Go to repository Settings → Pages
- Source: "Deploy from a branch"
- Branch: `gh-pages` folder: `/ (root)`
- Save

### 6. 🎉 Done!
Your site will be automatically deployed via GitHub Actions!

---

## 🔍 What Happens Next?

1. **GitHub Actions** automatically builds and deploys your site
2. **gh-pages branch** is created with your built files
3. **Site goes live** at `https://[username].github.io/[repo-name]`
4. **Future updates** automatically deploy when you push to main

---

## 🆘 Need Help?

- Check `DEPLOYMENT.md` for detailed instructions
- Use `DEPLOYMENT_CHECKLIST.md` to track progress
- Review GitHub Actions logs if something goes wrong

---

**Your portfolio will be live in minutes! 🚀**
