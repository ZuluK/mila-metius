# Mila Metius 

A small static portfolio / product showcase site built with plain HTML, CSS Bootstrap, and a little JavaScript. This repository contains the site's source files (HTML pages, styles, scripts, and assets).

## What this is
- A static website with product pages and common layout fragments.
- No build system required — files are ready to be served from any static host.

## Files of note
- `index.html` — Home page
- `about.html` — About page
- `collections.html` — Collections listing
- `product1.html` … `product6.html` — Product pages
- `navbar.html`, `footer.html` — Layout fragments
- `styles.css`, `styles.less` — Styles (CSS + source Less)
- `script.js` — Client-side JavaScript
- `assets/` — Images and other static assets

## How to preview locally
Open `index.html` directly in your browser, or run a small static server from the project root. Example commands (macOS / zsh):

```bash
# Python 3 built-in server (recommended)
python3 -m http.server 8000
# then open http://localhost:8000/ in your browser

# OR using Node's http-server (if installed)
npx http-server -c-1 8000
```

## Notes & editing
- Edit the HTML files directly. `navbar.html` and `footer.html` are included as fragments; depending on your workflow you may copy them into pages or use a template approach.
- If you use the Less source (`styles.less`), compile it to CSS using your preferred tooling, or rely on the shipped `styles.css`.

## Deployment
- This site is ready for GitHub Pages, Netlify, Vercel, or any static hosting provider.
- For GitHub Pages, push the repo and enable Pages from the repository settings (branch `main` or `gh-pages`, or use the repository root).

## Contact
Maintainer: Rich Spence -richspence@gmail.com

---
Created on: 2025-11-09
