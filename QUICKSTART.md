# Quick Start Guide

## 1. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 2. Add Your Content

### Add Experience Entry
Create `content/experience/my-role.mdx`:
```mdx
---
title: "Job Title"
company: "Company Name"
role: "Job Title"
startDate: "Jan 2024"
endDate: "Present"
location: "City, Country"
tags: ["Tag1", "Tag2"]
tools: ["Tool1", "Tool2"]
featured: true
logoPath: "/images/logos/company.png"
---

## Overview
Your content here...
```

### Add Project
Create `content/projects/my-project.mdx`:
```mdx
---
title: "Project Name"
description: "Brief description"
tech: ["Tech1", "Tech2"]
githubUrl: "https://github.com/..."
featured: true
screenshots: ["/images/projects/screenshot.png"]
---

## Details
Your content here...
```

### Update Other Content
- Education: Edit `content/education.json`
- Skills: Edit `content/skills.json`
- Certificates: Edit `content/certificates.json`

## 3. Add Images

### Company Logos
Add to: `public/images/logos/`
- Format: PNG with transparency
- Size: 200x200px

### Project Screenshots
Add to: `public/images/projects/`
- Format: PNG or JPG
- Size: 1200x800px (16:9 ratio)

### Your CV
Replace: `public/cv.pdf`

## 4. Customize

### Update Personal Info
Files to edit:
- `src/app/layout.tsx` - SEO metadata
- `src/components/Navbar.tsx` - Navigation
- `src/components/Footer.tsx` - Footer links
- `src/app/page.tsx` - Home page hero

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#your-color',
    600: '#your-color',
    // ...
  }
}
```

## 5. Deploy to Vercel

```bash
# Build locally to test
npm run build

# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main

# Deploy on Vercel
# Visit vercel.com and import your repository
```

## Common Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
```

## Troubleshooting

**Images not showing?**
- Check paths start with `/` (e.g., `/images/logo.png`)
- Verify files exist in `public/` directory

**Build errors?**
- Verify all MDX frontmatter is valid
- Check JSON files are properly formatted
- Run `npm run lint` to find issues

**Dark mode not working?**
- Clear browser localStorage
- Check console for errors

## Need Help?

Read the full documentation in [README.md](README.md)
