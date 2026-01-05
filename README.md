# Happy Birthday Riin-du 🎂✨

A personal birthday website created as a gentle gift for Karina Anggia Rahmawati.

## Features

- 🎨 Beautiful pink pastel design with JJK-inspired elements
- 📅 Date-based access control (opens on January 6, 2026)
- 🔐 Token-based authentication for privacy
- 📱 Fully responsive mobile-first design
- 🗺️ Interactive maps showing location of each moment
- 🎬 Support for both images and videos
- ✨ Smooth scroll animations
- 📖 Instagram stories-style horizontal timeline

## Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Maps**: React Leaflet
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000?token=riindu-special-2026
```

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Access Control

The website has two layers of security:

1. **Date Restriction**: The site only opens on or after January 6, 2026
2. **Token Authentication**: Requires a valid access token in the URL

To access the website, use the URL with the token:
```
https://your-domain.com?token=riindu-special-2026
```

## Project Structure

```
src/
├── components/          # React components
│   ├── AccessDenied.tsx
│   ├── LandingPage.tsx
│   ├── Timeline.tsx
│   ├── TimelineCard.tsx
│   ├── MapComponent.tsx
│   └── ClosingSection.tsx
├── data/               # JSON data files
│   └── timeline.json   # Timeline moments data
├── routes/             # TanStack Router routes
│   ├── __root.tsx
│   └── index.tsx
├── styles/             # CSS styles
│   └── index.css
├── utils/              # Utility functions
│   └── accessControl.ts
└── main.tsx           # Application entry point
```

## Customization

### Changing the Access Token

Edit `src/utils/accessControl.ts`:

```typescript
const VALID_TOKEN = 'your-custom-token';
```

### Changing the Access Date

Edit `src/utils/accessControl.ts`:

```typescript
const targetDate = new Date('2026-01-06'); // Change to your desired date
```

### Updating Timeline Content

Edit `src/data/timeline.json` to add, remove, or modify moments.

## License

This is a private, personal project created as a birthday gift.

---

Made with 💕 for a special someone
