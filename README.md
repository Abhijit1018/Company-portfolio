# TechVision - Modern Company Portfolio Website

A stunning, modern company portfolio website built with React, TypeScript, Three.js, and Framer Motion. Features dark mode, 3D effects, smooth animations, and a comprehensive range of services.

## 🚀 Features

- **Dark Mode Support** - Toggle between light and dark themes
- **3D Models & Effects** - Interactive 3D elements using Three.js
- **Smooth Animations** - Framer Motion powered animations throughout
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI/UX** - Beautiful gradients, glass morphism, and modern design
- **Comprehensive Services** - Wide range of digital services showcased
- **Portfolio Gallery** - Interactive project showcase with filtering
- **Contact Form** - Functional contact form with validation
- **Performance Optimized** - Fast loading and smooth scrolling

## 🛠️ Tech Stack

- **Frontend Framework** - React 18 with TypeScript
- **Styling** - Tailwind CSS with custom animations
- **3D Graphics** - Three.js with React Three Fiber
- **Animations** - Framer Motion
- **Icons** - Lucide React
- **Build Tool** - Create React App
- **Package Manager** - npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd company-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Colors and Themes
- Edit `tailwind.config.js` to customize colors and animations
- Modify `src/context/ThemeContext.tsx` for theme-related changes

### Content
- Update company information in respective component files
- Modify services in `src/components/Services.tsx`
- Add/remove portfolio projects in `src/components/Portfolio.tsx`

### 3D Models
- Customize 3D elements in `src/components/Hero.tsx`
- Add new 3D models using Three.js components

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with dark mode toggle
│   ├── Hero.tsx        # Hero section with 3D effects
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About section
│   ├── Portfolio.tsx   # Portfolio gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── context/            # React context
│   └── ThemeContext.tsx # Dark mode context
├── index.css           # Global styles
├── index.tsx           # App entry point
└── App.tsx             # Main App component

# Deployment & CI/CD
├── .github/workflows/  # GitHub Actions workflows
├── deploy.ps1          # Windows deployment script
├── deploy.sh           # Unix deployment script
├── DEPLOYMENT.md       # Detailed deployment guide
└── DEPLOYMENT_CHECKLIST.md # Deployment checklist
```

## 🎯 Key Features Explained

### Dark Mode
- Persistent theme preference using localStorage
- Smooth transitions between themes
- Context-based state management

### 3D Effects
- Interactive 3D models in hero section
- Orbit controls for user interaction
- Performance optimized rendering

### Animations
- Scroll-triggered animations
- Hover effects and micro-interactions
- Staggered animations for lists

### Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions

## 🚀 Deployment

### Quick Start (Recommended)
1. **Run the deployment script:**
   ```bash
   # Windows
   .\deploy.ps1
   
   # Unix/Linux/Mac
   ./deploy.sh
   ```

2. **Follow the prompts** and deploy to GitHub Pages automatically!

### Manual Deployment to GitHub Pages

#### Build for Production
```bash
npm run build
```

#### Deploy to GitHub Pages
1. **Create GitHub repository** and make it public
2. **Update homepage** in `package.json`:
   ```json
   "homepage": "https://[username].github.io/[repo-name]"
   ```
3. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[username]/[repo-name].git
   git branch -M main
   git push -u origin main
   ```
4. **Enable GitHub Pages** in repository settings
5. **Automatic deployment** via GitHub Actions!

### Alternative Platforms

#### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

#### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Deploy to Firebase
1. Install Firebase CLI: `npm i -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Build and deploy: `npm run build && firebase deploy`

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App
- `npm run deploy` - Deploy to GitHub Pages
- `npm run predeploy` - Build before deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: hello@techvision.com
- Phone: +1 (555) 123-4567
- Website: https://techvision.com

## 🎨 Design Credits

- Icons: [Lucide React](https://lucide.dev/)
- Images: [Unsplash](https://unsplash.com/)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter)

---

Built with ❤️ by TechVision Team 