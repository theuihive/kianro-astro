# Kianro

Kianro is a static agency portfolio website built with Astro. It includes pages for services, projects, pricing, a Markdown-powered blog, and contact information, with responsive layouts and animated interactions.

## Contents

- [Features](#features)
- [Technology](#technology)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Pages and routes](#pages-and-routes)
- [Project structure](#project-structure)
- [Managing site content](#managing-site-content)
- [Site configuration and SEO](#site-configuration-and-seo)
- [Build and deployment](#build-and-deployment)

## Features

- Static pages generated with Astro
- Responsive agency portfolio pages and project detail pages
- Blog posts authored as Markdown with validated frontmatter
- JSON-based project, service, pricing, FAQ, testimonial, and policy content
- Category filtering and load-more controls on the blog listing
- GSAP animations, smooth scrolling with Lenis, and an Embla testimonials carousel
- Shared site metadata, navigation, contact details, social links, and footer configuration
- Canonical URLs, Open Graph and Twitter metadata, and an XML sitemap

## Technology

- [Astro](https://astro.build/) 7
- TypeScript with Astro's strict TypeScript configuration
- Tailwind CSS 4 through the Vite plugin
- GSAP and ScrollTrigger for animations
- Lenis for smooth scrolling
- Embla Carousel for the testimonials carousel

## Requirements

- Node.js `>=22.12.0` (see `engines` in `package.json`)
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the URL printed by Astro, usually <http://localhost:4321>.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Astro development server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- <args>` | Run an Astro CLI command, for example `npm run astro -- check` |

## Pages and routes

| Route | Description |
| --- | --- |
| `/` | Home page with services, featured work, process, pricing, testimonials, FAQs, and recent blog posts |
| `/about` | Agency information, team, awards, and related content |
| `/services` | Services overview |
| `/projects` | Project listing |
| `/projects/<slug>` | Project detail generated from `src/data/projects.json` |
| `/pricing` | Pricing information |
| `/blog` | Blog listing with category filters and load-more behavior |
| `/blog/<slug>` | Blog article generated from Markdown content |
| `/contact` | Contact information and contact form |
| `/privacy-policy` | Privacy policy |
| `/terms-conditions` | Terms and conditions |
| `/license` | License page content |
| `/style-guide` | Style guide |
| `/sitemap-index.xml` | XML sitemap |

Astro also generates a 404 page for unknown routes.

## Project structure

```text
.
├── public/                 # Static files served from the site root
│   ├── favicon.png
│   └── images/
├── src/
│   ├── assets/             # Global CSS and local fonts
│   ├── components/         # Reusable page and UI components
│   ├── config/
│   │   └── site.ts         # Shared brand, contact, navigation, SEO, and footer settings
│   ├── content/
│   │   └── blog/           # Blog posts written in Markdown
│   ├── data/               # JSON data used by page components
│   ├── layouts/            # Base HTML and shared page layouts
│   ├── lib/                # Shared utilities
│   ├── pages/              # File-based routes and dynamic route templates
│   ├── scripts/            # Browser-side scripts
│   ├── types/              # TypeScript data types
│   └── content.config.ts   # Astro content collection and blog frontmatter schema
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Managing site content

### Shared site information

Edit `src/config/site.ts` to update the site name, description, URL, author, keywords, favicon, contact information, social links, header navigation, and footer links. These values are used across the site and in page metadata.

### JSON-backed sections

The JSON files in `src/data/` provide content for these sections:

| File | Content |
| --- | --- |
| `projects.json` | Project listing and project detail pages |
| `services.json` | Services |
| `pricing.json` | Pricing plans |
| `faqs.json` | Frequently asked questions |
| `testimonials.json` | Testimonials |
| `awards.json` | Awards |
| `privacy-policy.json` | Privacy policy |
| `terms-conditions.json` | Terms and conditions |
| `license.json` | License page content |

Project detail routes are generated from each project's `slug` in `projects.json`. Keep image paths relative to the `public/` directory, for example `/images/projects/project-01.jpg`.

### Blog posts

Add a `.md` or `.mdx` file under `src/content/blog/`. The blog collection is defined in `src/content.config.ts`, which validates each post's frontmatter.

Example:

```md
---
title: "A useful article title"
description: "A short summary of the article."
date: 2026-06-15
author: "Kianro Team"
category:
  name: "Design"
  slug: "design"
tags:
  - Design
  - Strategy
cover: "/images/blog/article-cover.jpg"
draft: false
---

## Article heading

Write the article in Markdown.
```

The `title`, `description`, `date`, `author`, and `category` fields are required. `cover` is optional; `draft` defaults to `false`; and `tags` defaults to an empty list. Set `draft: true` to exclude a post from the blog listing. A post's filename becomes its URL slug, so `brand-strategy.md` is available at `/blog/brand-strategy`.

### Images, fonts, and styles

- Put site images and other directly served static assets in `public/`.
- Keep bundled fonts and styles in `src/assets/`.
- Global design tokens and base styles are in `src/assets/css/global.css`.

### Contact form

The contact form is currently presentation-only: it prevents the browser's default submit action and is not connected to an API or form service. Connect a backend or form provider before using it to receive messages.

## Site configuration and SEO

`src/layouts/BaseLayout.astro` uses `src/config/site.ts` for page titles, descriptions, canonical URLs, Open Graph metadata, and Twitter card metadata. The sitemap also uses the configured site URL.

When deploying to a different domain, update the `siteUrl` in `src/config/site.ts` and the `site` value in `astro.config.mjs` so generated URLs use the production domain. Update the Open Graph image and favicon paths in the site configuration when replacing those assets.

## Build and deployment

Create a production build:

```bash
npm run build
```

The generated static website is written to `dist/`. Preview that build locally with:

```bash
npm run preview
```

Deploy the contents of `dist/` to a static hosting provider. Configure the provider to use the Node.js version specified in `package.json` when it builds the project.
