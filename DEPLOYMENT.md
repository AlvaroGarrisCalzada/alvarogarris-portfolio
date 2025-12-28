# Deployment Guide

## Prerequisites

- Git installed
- GitHub account
- Vercel account (free)

## Step-by-Step Deployment to Vercel

### 1. Prepare Your Repository

```bash
# Initialize git (if not already done)
git init

# Create .gitignore (already created)
# It excludes node_modules, .next, etc.

# Stage all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"
```

### 2. Push to GitHub

```bash
# Create a new repository on GitHub (github.com/new)
# Name it something like: portfolio-website

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push
git branch -M main
git push -u origin main
```

### 3. Deploy on Vercel

**Method 1: Web Interface (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In" (use GitHub to login)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Wait 1-2 minutes
8. Your site is live! 🎉

**Method 2: Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, then your site is live!
```

### 4. Configure Custom Domain (Optional)

In Vercel Dashboard:
1. Go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS instructions
5. Wait for SSL certificate (automatic)

### 5. Update Site URLs

After deployment, update these files with your actual domain:

**src/app/sitemap.ts:**
```typescript
const baseUrl = 'https://your-domain.com'; // Update this
```

**src/app/robots.ts:**
```typescript
sitemap: 'https://your-domain.com/sitemap.xml', // Update this
```

**src/app/layout.tsx:**
```typescript
openGraph: {
  url: 'https://your-domain.com', // Update this
}
```

Then commit and push:
```bash
git add .
git commit -m "Update domain URLs"
git push
```

Vercel will auto-deploy!

## Alternative Deployment Options

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `out` folder after running `npm run build`
3. Or connect your GitHub repo

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"

# Deploy
npm run deploy
```

### Railway

1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Add environment variables if needed
4. Deploy automatically

### Self-Hosted (VPS/Server)

```bash
# On your server
git clone <your-repo>
cd portfolio-website
npm install
npm run build
npm start  # Runs on port 3000

# Use nginx or apache as reverse proxy
```

## Environment Variables

This project doesn't require any environment variables by default.

If you add external services (analytics, CMS, etc.), add them in:
- **Vercel:** Settings → Environment Variables
- **Local:** Create `.env.local` file (already in .gitignore)

## Continuous Deployment

Once connected to Vercel/Netlify:
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- No manual work needed!

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images load properly
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] SEO metadata correct
- [ ] CV downloads
- [ ] Social links work
- [ ] No console errors
- [ ] Test on multiple devices/browsers

## Updating Your Site

```bash
# Make changes locally
# Test with: npm run dev

# Commit and push
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys in ~1 minute!
```

## Performance Tips

After deployment, check:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

Optimize:
- Compress images before uploading
- Use WebP format for photos
- Keep images under 500KB
- Use Next.js Image optimization

## Monitoring & Analytics

Add analytics to track visitors:

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `src/app/layout.tsx`

**Plausible (Privacy-friendly):**
```bash
npm install next-plausible
```

**Vercel Analytics:**
- Enable in Vercel dashboard (free for hobby plan)

## Domain Suggestions

Professional domain options:
- `yourname.com`
- `yourname.dev`
- `yourname.io`
- `firstname-lastname.com`

Register at: Namecheap, Google Domains, Cloudflare

## SSL Certificate

All deployment platforms provide free SSL:
- Vercel: Automatic
- Netlify: Automatic
- Let's Encrypt: For self-hosted

## Backup Your Site

```bash
# Create backup
git tag -a v1.0 -m "Portfolio version 1.0"
git push origin v1.0

# Restore if needed
git checkout v1.0
```

## Troubleshooting Deployment

**Build fails on Vercel:**
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify Node version (use LTS)

**Images not loading:**
- Check image paths (should start with `/`)
- Verify files exist in `public/` directory
- Check file extensions are lowercase

**404 errors:**
- Clear Vercel cache
- Check file names and routes
- Verify dynamic routes have generateStaticParams

**Slow loading:**
- Optimize images
- Check bundle size
- Use Next.js Image component
- Enable Vercel Analytics to identify issues

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Issues](https://github.com/vercel/next.js/issues)

---

**Ready to deploy? Start with step 1 above!**

Your portfolio will be live in less than 10 minutes. 🚀
