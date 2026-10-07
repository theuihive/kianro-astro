# kianro

Modern agency portfolio website built with Astro, Tailwind CSS, and motion-enhanced interactions for creative agencies, freelancers, startups, and digital studios.

## Overview

This project is a landing page and portfolio website designed for a modern creative business. It includes sections for services, projects, about, blog, and contact information, with a polished visual identity and smooth animated experience.

## Tech Stack

- Astro 7
- Tailwind CSS
- TypeScript
- GSAP for animation
- Lenis for smooth scrolling
- Embla Carousel for sliders

## Project Structure

```text
/
├── public/
│   ├── favicon.png
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   │   └── site.ts
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at:

```text
http://localhost:4321
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

| Command | Action |
| :------ | :----- |
| `npm run dev` | Start Astro dev server |
| `npm run build` | Generate production build |
| `npm run preview` | Preview built site locally |
| `npm run astro` | Run Astro CLI commands |

## Configuration

Core site metadata such as the brand name, description, contact details, navigation, and footer content are centralized in:

- `src/config/site.ts`

This is the main file to edit when updating the site information without changing page components.

## Deployment

This project is configured for deployment as a static Astro site and is ready to be published to platforms such as Netlify, Vercel, or any static hosting provider.

## License

This project is for demo and portfolio use. Please check the project ownership and licensing terms before production deployment or redistribution.
