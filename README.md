# Picky

A small color preview app built with Vite and vanilla JavaScript. Users can enter a named color or a hex value, pick a color from the color input, and preview the selected color on the page with a loading animation before the background updates.

## Features

- Preview a color by entering a color name or hex value
- Use a color picker for quick selection
- Get autocomplete suggestions as you type
- Display a loading overlay while the preview is processing
- Show validation messages for invalid or missing color input

## Tech Stack

- Vite
- JavaScript
- HTML
- CSS

## Project Structure

```bash
color-picker/
├── index.html
├── package.json
├── vite.config.ts
├── public/
├── src/
│   ├── main.js
│   ├── style.css
│   ├── assets/
│   ├── data/
│   │   └── colors.json
│   ├── scripts/
│   │   ├── autoFill.js
│   │   ├── changeColor.js
│   │   ├── modal.js
│   │   └── utility/
│   │       └── loading.js
│   └── styles/
│       ├── loader.css
│       ├── modal.css
│       └── suggestions.css
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal in your browser.

## Build

To create a production build:

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Notes

This project is designed as a lightweight front-end demo and can be expanded with additional color palettes, themes, or copy-to-clipboard actions.
