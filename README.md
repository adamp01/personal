# Personal Website

An Astro-based personal site, currently home to a travel journal. Built with Astro, MDX, and React. Deployed automatically to Cloudflare Pages on merge to `main`.

## Setup

**Prerequisites:** Node.js and [pnpm](https://pnpm.io/installation).

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # builds to ./dist/
pnpm preview    # preview the production build locally
```

## Deployment

The site is deployed on **Cloudflare Pages**. Any merge to `main` triggers an automatic build and deploy — no manual steps required. Cloudflare runs `pnpm build` and serves the `dist/` output.

To check build logs or manage environment variables, go to the Cloudflare Pages dashboard for this project.

## Adding a Travel Post

Travel posts live in `src/content/travels/` as `.mdx` files. Create a new file named `YYYY-<slug>.mdx`.

### Frontmatter schema

```yaml
---
title: "Kerala Backwaters & Hills"
dateStart: "2024-01-10"
dateEnd: "2024-01-20"
countries: ["India"]
cities:
  - name: "Kochi"
  - name: "Alleppey"
categories: ["nature", "backwaters"]
rating: 5 # 1–5, optional
coverImage: "/images/cover.jpg" # optional
featured: false
regionSvg: "/maps/kerala.svg" # path to SVG map in public/maps/
regionPoints:
  - name: "Kochi"
    x: 60.5
    y: 68.6
  - name: "Alleppey"
    x: 64.4
    y: 77.6
regionRoutes:
  - from: 0 # index into regionPoints
    to: 1
---
```

`regionPoints` coordinates are on a **0–100 scale** relative to the SVG viewport (not pixels, not lat/lng). Use the coordinate picker tool (below) to find them.

## Maps

### Getting SVGs from simplemaps.com

1. Go to [simplemaps.com](https://simplemaps.com) and find the region or country map you want.
2. Download the **SVG** version of the map.
3. Drop the file into `public/maps/` (e.g. `public/maps/kerala.svg`).
4. Reference it in the post frontmatter as `regionSvg: "/maps/kerala.svg"`.

The SVGs from simplemaps render cleanly as-is — no processing needed.

### Finding coordinates with the helper tool

Once you have an SVG in `public/maps/`, use the coordinate picker to identify `x`/`y` values for each location:

1. Start the dev server (`pnpm dev`).
2. Open [http://localhost:4321/tools/coordpicker.html](http://localhost:4321/tools/coordpicker.html) in your browser.
3. Type the path to your SVG in the input (e.g. `/maps/kerala.svg`) and click **Load**.
4. Click any location on the map — a dot appears and the coordinates are logged below.
5. Use the **copy YAML** button next to each point to copy a ready-to-paste `regionPoints` entry.

Coordinates are 0–100 on both axes, anchored to the top-left of the SVG. Paste them directly into the `regionPoints` array in your frontmatter.

## Project Structure

```
src/
  content/
    travels/        # MDX travel posts
    config.ts       # Zod schema for the travels collection
  pages/
    index.astro
    travels/
      index.astro   # travel listing
      [slug].astro  # individual post
  components/
    post/           # HeroImage, TripSidebar, ImageBase, etc.
  layouts/
    BaseLayout.astro
public/
  maps/             # SVG region maps
  tools/
    coordpicker.html
```
