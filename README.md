# SoulAce-Foto Photography Website

A responsive photography portfolio website built with React, Vite, Tailwind CSS, AOS animations, and React Icons.

## Features

- Responsive hero, stats, about, portfolio, services, contact, and footer sections
- Filterable portfolio gallery using all local photography assets
- Count-up stats animation triggered on scroll
- Filterable services section with feature lists
- Mobile-friendly navigation and horizontal filter controls
- Branded dark red, cream, and gold visual system
- Inter and Roboto typography via Google Fonts

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- AOS
- React Icons

## Project Structure

```text
phtography.m/
  my-app/
    src/
      assets/
        asset.js
        image/
      components/
        About.jsx
        Contact.jsx
        Footer.jsx
        Hero.jsx
        Navbar.jsx
        Portfolio.jsx
        Services.jsx
        Stats.jsx
      App.jsx
      index.css
      main.jsx
```

## Getting Started

Install dependencies from the app directory:

```bash
cd my-app
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Content Updates

Most site content and image mappings live in:

```text
my-app/src/assets/asset.js
```

Update this file to change navigation links, contact info, social links, stats, portfolio items, services, testimonials, and FAQs.

## Main Sections

- `Hero.jsx`: first-screen brand message and calls to action
- `Stats.jsx`: animated studio stats
- `Portfolio.jsx`: filterable project gallery
- `About.jsx`: studio story, process, and proof points
- `Services.jsx`: filterable service cards
- `Contact.jsx`: contact methods and social links
- `Footer.jsx`: site navigation, service links, contact CTA, and social icons

## Notes

The source app is inside `my-app`, so run npm scripts from that directory.
