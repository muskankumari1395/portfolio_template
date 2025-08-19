# Repository Overview

## Project
- **Name**: portfolio-template
- **Type**: React + TypeScript + Vite
- **Dev server**: http://localhost:8080 (Vite)
- **Package manager**: npm

## Tech Stack
- **Build tool**: Vite
- **Language**: TypeScript
- **UI**: React 18, shadcn/ui, Radix UI
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **State/Networking**: @tanstack/react-query
- **Icons**: lucide-react, phosphor-react
- **Animations**: GSAP, tailwindcss-animate
- **Routing**: react-router-dom v7

## Run & Build
1. Install deps:
   ```sh
   npm i
   ```
2. Start dev server:
   ```sh
   npm run dev
   # opens on http://localhost:8080
   ```
3. Build for production:
   ```sh
   npm run build
   ```
4. Preview production build:
   ```sh
   npm run preview
   ```

## Key Paths
- **Entry HTML**: index.html
- **App entry**: src/main.tsx → renders <App /> to #root
- **App shell**: src/App.tsx
- **Pages**: src/pages (Index.tsx, NotFound.tsx)
- **Components**: src/components/**
- **Styles**: index.css (root), src/styles/styles.css
- **Hooks**: src/hooks/**
- **Lib/Utils**: src/lib/**
- **Tailwind config**: tailwind.config.ts
- **PostCSS config**: postcss.config.js
- **Vite config**: vite.config.ts
- **TS config**: tsconfig.json, tsconfig.app.json, tsconfig.node.json

## Vite Config Highlights (vite.config.ts)
- **Host**: "::" (IPv6/all interfaces)
- **Port**: 8080
- **Plugins**: @vitejs/plugin-react
- **Aliases**: `@` → ./src

## Tailwind Setup
- **Config**: tailwind.config.ts
- **Content**: ./pages, ./components, ./app, ./src (ts/tsx)
- **Dark mode**: class-based
- **Plugins**: tailwindcss-animate
- **Extended theme**: custom colors, borderRadius, keyframes, and animations (accordion, float, pulse-glow, fade-in-up, slide-in-right)

## Routing
- **Router**: BrowserRouter
- **Routes**: `/` → Index, catch-all `*` → NotFound

## shadcn/ui
- **Config file**: components.json
- **Aliases**: components, utils, ui, lib, hooks mapped to `@/...`
- **Tailwind**: points to `tailwind.config.ts`, CSS at `src/index.css`

## Scripts (package.json)
- `dev`: vite
- `build`: vite build
- `preview`: vite preview

## Known Notes
- If you see `[postcss] Cannot find module 'tailwindcss-animate'`, install it:
  ```sh
  npm i -D tailwindcss-animate
  ```
- Vite cache issues: remove `node_modules/.vite` to force rebuild if needed.

## Deployment
- Build using `npm run build`; serve the generated `dist/` with any static host.