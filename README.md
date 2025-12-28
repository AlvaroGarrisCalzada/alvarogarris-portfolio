# Personal Portfolio Website

A modern, content-driven portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed for easy content management and deployment to Vercel.

## 🚀 Features

- **Next.js 14 App Router** with static site generation
- **TypeScript** for type safety
- **Tailwind CSS** for modern, responsive styling
- **MDX Content** for rich, markdown-based pages
- **Dark Mode** toggle with localStorage persistence
- **SEO Optimized** with metadata, OpenGraph, and sitemap
- **Fully Responsive** mobile-first design
- **Content-Driven** - update content without touching code

## 📁 Project Structure

```
portfolio-personal/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with nav/footer
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── experience/         # Experience list + [slug] detail
│   │   ├── projects/           # Projects list + [slug] detail
│   │   ├── certificates/       # Certificates page
│   │   ├── contact/            # Contact page
│   │   ├── sitemap.ts          # SEO sitemap
│   │   └── robots.ts           # Robots.txt
│   ├── components/             # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Card.tsx
│   │   ├── Tag.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── CertificateCard.tsx
│   │   └── FilterBar.tsx
│   ├── lib/
│   │   └── content.ts          # Content parsing utilities
│   └── types/
│       └── content.ts          # TypeScript type definitions
├── content/                    # Content files (MDX + JSON)
│   ├── experience/             # MDX files for each role
│   ├── projects/               # MDX files for each project
│   ├── education.json
│   ├── skills.json
│   └── certificates.json
├── public/
│   ├── images/                 # Images and logos
│   │   ├── logos/              # Company logos
│   │   └── projects/           # Project screenshots
│   └── cv.pdf                  # Your CV (replace placeholder)
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## 📝 Content Management

### Adding a New Experience Entry

1. Create a new MDX file in `content/experience/`:

```bash
touch content/experience/my-new-role.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "Software Engineer"
company: "Tech Company"
role: "Software Engineer"
startDate: "Jan 2024"
endDate: "Present"
location: "San Francisco, CA"
tags: ["Engineering", "Backend"]
tools: ["Python", "Django", "PostgreSQL"]
featured: true
logoPath: "/images/logos/tech-company.png"
---

## Overview

Your role description here...

## Key Responsibilities

- Bullet point 1
- Bullet point 2
```

3. Add the company logo to `public/images/logos/tech-company.png`

### Adding a New Project

1. Create MDX file in `content/projects/`:

```bash
touch content/projects/my-awesome-project.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "My Awesome Project"
description: "A brief one-line description"
tech: ["React", "Node.js", "MongoDB"]
githubUrl: "https://github.com/username/repo"
demoUrl: "https://demo.example.com"
featured: true
screenshots: ["/images/projects/project-1.png"]
---

## Problem

What problem does this solve?

## Approach

How did you build it?

## Results

What were the outcomes?
```

3. Add screenshots to `public/images/projects/`

### Updating Certificates

Edit `content/certificates.json`:

```json
[
  {
    "id": "cert-id",
    "title": "Certificate Name",
    "issuer": "Issuing Organization",
    "date": "2024",
    "credentialUrl": "https://verify-url.com",
    "pdfPath": "/certificates/cert.pdf"
  }
]
```

### Updating Education

Edit `content/education.json`:

```json
[
  {
    "id": "university-id",
    "institution": "University Name",
    "degree": "Bachelor of Science",
    "field": "Computer Science",
    "location": "City, Country",
    "startDate": "Sep 2020",
    "endDate": "Jun 2024",
    "description": "Brief description or honors",
    "logoPath": "/images/logos/university.png"
  }
]
```

### Updating Skills

Edit `content/skills.json`:

```json
[
  {
    "category": "Programming Languages",
    "items": ["Python", "JavaScript", "TypeScript"]
  }
]
```

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
      },
    },
  },
}
```

### Navigation

Update navigation links in `src/components/Navbar.tsx`:

```tsx
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // Add or remove items
];
```

### Footer

Modify `src/components/Footer.tsx` to update social links and footer content.

### SEO & Metadata

Update site metadata in `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: {
    default: 'Your Name | Your Title',
    template: '%s | Your Name',
  },
  description: 'Your description',
  // Update OpenGraph, Twitter cards, etc.
};
```

Update your domain in `src/app/sitemap.ts` and `src/app/robots.ts`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project" and import your repository

4. Vercel will auto-detect Next.js and configure build settings

5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Custom Domain

In Vercel dashboard:
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Manual Deployment

Build the static site:

```bash
npm run build
```

Upload the `out/` directory to any static hosting service (Netlify, GitHub Pages, etc.).

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with gray-matter
- **Deployment**: Vercel (recommended)
- **Package Manager**: npm

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📋 Content Checklist

Before deploying, make sure to:

- [ ] Replace `/public/cv.pdf` with your actual CV
- [ ] Add company logos to `/public/images/logos/`
- [ ] Add project screenshots to `/public/images/projects/`
- [ ] Update personal information in components (name, email, links)
- [ ] Update SEO metadata with your domain
- [ ] Customize colors and branding
- [ ] Test all pages and links
- [ ] Verify responsive design on mobile

## 🆘 Troubleshooting

### Build Errors

If you get errors about missing content files:
- Ensure all MDX files have proper frontmatter
- Check that JSON files are valid
- Verify all image paths exist

### Images Not Showing

- Check that images are in `/public/` directory
- Verify paths start with `/` (e.g., `/images/logo.png`)
- Ensure images are optimized (< 500KB recommended)

### Dark Mode Issues

- Clear browser localStorage
- Check browser console for errors
- Verify `dark:` classes in Tailwind config

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📧 Contact

For questions or feedback:
- Email: contact@alvarogarris.com
- LinkedIn: [linkedin.com/in/alvaro-garris-calzada](https://www.linkedin.com/in/alvaro-garris-calzada/)
- GitHub: [github.com/AlvaroGarrisCalzada](https://github.com/AlvaroGarrisCalzada)
- YouTube: [Watch Video](https://www.youtube.com/watch?v=1erpki_k8E4)

---

Built with ❤️ using Next.js and TypeScript
