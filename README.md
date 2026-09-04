# Interactive Human Existence Potential

[![GitHub Org](https://img.shields.io/badge/GitHub-HESCOR-blue?logo=github&logoColor=white)](https://github.com/HESCOR)
[![GitHub Pages](https://img.shields.io/badge/Open-Interactive_Map-ea574f)](https://hescor.github.io/hep-explorer/)

An interactive visualization of **Human Existence Potential (HEP)** across Europe. Two controls combine low, medium, and high preferences for temperature and precipitation into nine scenarios.

## Interactive application

The full standalone GitHub Page is available at **[hescor.github.io/hep-explorer](https://hescor.github.io/hep-explorer/)**.

For integration into the Virtual Exhibition, a streamlined version without the HESCOR header, context box, or footer is also available:

**[Open the embeddable version](https://hescor.github.io/hep-explorer/embed.html)**

It can be embedded using an `iframe`, for example:

```html
<iframe
  src="https://hescor.github.io/hep-explorer/embed.html"
  title="Interactive Human Existence Potential map"
  width="100%"
  height="900"
  loading="lazy"
></iframe>
```

The application runs entirely in the browser and requires neither a build step nor external JavaScript libraries. The nine maps are provided as optimized WebP assets.

## Scientific background

This project presents a simplified approximation of HEP based on mean temperature (°C) and annual precipitation (mm). The climate data come from ERA-Interim and cover the period from 1980 to 2009.

The results are a simplified model visualization, not a prediction of individual quality of life.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` publishes the static website after every push to `main`. In the GitHub repository, select **GitHub Actions** as the source under **Settings → Pages → Build and deployment**.

## Contributors

- Christian Wegener — Concept
- Johanna Hilpert — Concept
- Philipp Schlüter — Interactive GitHub Page development

All contributors are affiliated with the University of Cologne. Citation metadata are available in [`CITATION.cff`](CITATION.cff).
