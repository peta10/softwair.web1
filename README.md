# Softwair - Business Automation Platform

A modern web application for business automation solutions built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
softwair/
├── src/
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   ├── magicui/             # Custom UI components with animations
│   │   ├── blocks/              # Content block components
│   │   ├── features/            # Feature-specific components
│   │   ├── hero/                # Hero section components
│   │   ├── process/             # Process visualization components
│   │   ├── TimeAudit/           # Interactive audit tool components
│   │   ├── cta/                 # Call-to-action components
│   │   ├── BrowserCompatibility.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FeatureItem.tsx
│   │   ├── GrowthEngine.tsx
│   │   ├── MinimalDashboard.tsx
│   │   ├── process-component.tsx
│   │   ├── bento-process-component.tsx
│   │   ├── bento-process-component_bento.tsx
│   │   └── bento-process-animations.css
│   ├── pages/                   # Page components
│   ├── app/                     # Application-level components
│   ├── data/                    # Data files (questionnaires, content)
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Libraries and configurations
│   ├── utils/                   # Utility functions
│   ├── App.tsx                  # Main application component
│   ├── index.css                # Global CSS styles
│   ├── main.tsx                 # Application entry point
│   └── vite-env.d.ts           # Vite environment type definitions
├── public/                      # Static assets
├── packages/                    # Shared packages
├── config files
    ├── .env                     # Environment variables
    ├── eslint.config.js         # ESLint configuration
    ├── knip.json                # Knip configuration
    ├── package.json             # Dependencies and scripts
    ├── postcss.config.js        # PostCSS configuration
    ├── tailwind.config.js       # Tailwind CSS configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── tsconfig.app.json        # App-specific TypeScript config
    ├── tsconfig.node.json       # Node-specific TypeScript config
    └── vite.config.ts           # Vite configuration
```

## Site Map

```
softwair.io/
├── / (Home)
│   └── Features:
│       ├── Hero Section
│       ├── Growth Engine
│       ├── Bento Process View
│       ├── Feature Grid
│       └── FAQ Section
├── /product
│   └── Product details page with email capture
├── /pricing
│   └── Pricing information with email capture
├── /time-audit
│   └── Interactive audit tool:
│       ├── Industry Selection
│       ├── Business Profile
│       ├── Operations Assessment
│       └── Results & Email Capture
└── /privacy
    └── Privacy Policy
```

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1
- **Build Tool**: Vite 5.4.2
- **Router**: React Router DOM 6.22.3
- **Animation**: 
  - Framer Motion 11.0.8
  - React Three Fiber/Drei
  - Spline 3D
  - TSParticles
- **UI Components**: Radix UI
- **Icons**: Lucide React 0.344.0
- **Database**: Supabase
- **State Management**: React Context API
- **Audio**: Howler.js
- **Other Libraries**: 
  - Class Variance Authority
  - TailwindMerge
  - React Scroll

## Database Schema

### Email Submissions Table
```sql
CREATE TABLE email_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source_page text NOT NULL CHECK (source_page IN ('product', 'pricing', 'time-audit')),
  industry text,
  time_saved text,
  cost_savings text,
  created_at timestamptz DEFAULT now()
);
```

## Environment Variables

Required environment variables in `.env`:
```
VITE_GA_ID=your-ga-id
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_SUPABASE_URL=your-supabase-url
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the required values
4. Connect to Supabase:
   - Click "Connect to Supabase" button
   - Follow the setup wizard
5. Start the development server:
   ```bash
   npm run dev
   ```

## Build & Deployment

Build the project:
```bash
npm run build
```

The project is configured for deployment to Netlify with the following settings:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x

## Features

### Key UI Components
- Interactive 3D visuals with Spline and Three.js
- Animated process flows with Framer Motion
- Bento grid layouts for feature presentation
- Interactive Time Audit questionnaire
- Responsive dashboard previews
- Particle effects for background animations

### Performance Optimizations
- Code splitting with dynamic imports
- Lazy loading for heavy components
- Image optimization
- Font preloading
- Bundle size optimization
- Browser compatibility detection

### Analytics & Tracking
- Google Analytics integration
- Page view tracking
- Event tracking
- Form submission tracking

## Security

- Row Level Security (RLS) enabled
- Email submission policies
- Authenticated user access controls
- Service role permissions

## Styling System

### Global CSS Variables
```css
:root {
  /* Color system */
  --background: 0 0% 97.6%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --primary: 147 100% 42%;
  --secondary: 214 100% 55%;
  --primary-light: 147 100% 95%;
  --secondary-light: 214 100% 95%;
  --dot-color: 214 100% 65%;
  --primary-foreground: 0 0% 98%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
  --radius: 0.5rem;
  --brand: 147 100% 42%;
  --brand-foreground: 147 100% 60%;
  
  /* Fluid typography */
  --text-xs: clamp(0.75rem, 1vw, 0.875rem);
  --text-sm: clamp(0.875rem, 1.2vw, 1rem);
  --text-base: clamp(1rem, 1.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 2vw, 1.25rem);
  --text-xl: clamp(1.25rem, 2.5vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 3vw, 2rem);
  --text-3xl: clamp(2rem, 4vw, 3rem);
  --text-4xl: clamp(2.5rem, 5vw, 4rem);
  
  /* Fluid spacing */
  --space-xs: clamp(0.75rem, 0.7vw, 1rem);
  --space-sm: clamp(1rem, 1.5vw, 1.5rem);
  --space-md: clamp(1.5rem, 2.5vw, 2.5rem);
  --space-lg: clamp(2rem, 4vw, 4rem);
  --space-xl: clamp(3rem, 6vw, 6rem);
}
```

### Dark Mode Colors
```css
.dark {
  --background: 225 10% 8%;
  --background-dark: 225 10% 8%;
  --foreground: 0 0% 98%;
  --card: 225 10% 8%;
  --card-foreground: 0 0% 98%;
  --popover: 225 10% 8%;
  --popover-foreground: 0 0% 98%;
  --primary: 147 100% 42%;
  --secondary: 214 100% 55%;
  --primary-light: 147 100% 10%;
  --secondary-light: 214 100% 10%;
  --dot-color-dark: 214 100% 60%;
  --primary-foreground: 0 0% 9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;
  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 0 0% 83.1%;
}
```

### Key Animation Effects
- Aurora gradient animations
- Marquee scrolling effects
- Grid pattern backgrounds
- Glow effects
- Hover underline animations
- 3D perspective transformations
- Ripple effects

## License

Private - All rights reserved