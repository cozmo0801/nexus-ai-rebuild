# NexusCore AI - Vercel Deployment Guide

This is a modern React website built with Vite, TypeScript, and Tailwind CSS featuring a beautiful glassmorphism design.

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo-name)

### Option 2: Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

### Option 3: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🛠️ Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # shadcn-ui components
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   └── ...
├── pages/             # Page components
├── lib/               # Utilities
├── hooks/             # Custom hooks
└── index.css          # Global styles
```

## 🎨 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn-ui** - Component library
- **Lucide React** - Icons

## ⚙️ Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🎯 Features

- ✨ Glassmorphism design with blur effects
- 🎨 Beautiful gradient animations
- 📱 Fully responsive design
- ⚡ Lightning-fast Vite build
- 🔧 TypeScript for type safety
- 🎭 Dark theme with vibrant accents
- 🌊 Animated background paths
- 💫 Smooth hover animations

## 📞 Support

For deployment issues or questions, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)

## 📄 License

This project is available for personal and commercial use.