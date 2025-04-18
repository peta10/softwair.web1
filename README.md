# Softwair - Business Automation Platform

A modern web application for business automation solutions built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
softwair/
├── packages/
│   ├── core/               # Core React components and routing
│   ├── features/          # Feature-specific components
│   └── ui/                # Shared UI components and design system
├── public/
│   ├── robots.txt         # Search engine crawling rules
│   └── sitemap.xml        # XML sitemap for search engines
├── src/
│   ├── components/
│   │   ├── BrowserCompatibility.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── cta/
│   │   │   └── FinalCTA.tsx
│   │   ├── features/
│   │   │   ├── CoreSolutions.tsx
│   │   │   ├── Features.tsx
│   │   │   └── Steps.tsx
│   │   └── hero/
│   │       └── Hero.tsx
│   ├── data/
│   │   └── industryQuestionnaires.ts
│   ├── hooks/
│   │   ├── useAnalytics.ts
│   │   └── useEmailSubmission.ts
│   ├── lib/
│   │   └── supabase.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Privacy.tsx
│   │   ├── Product.tsx
│   │   ├── Pricing.tsx
│   │   └── TimeAudit.tsx
│   ├── utils/
│   │   └── browserUtils.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── supabase/
│   └── migrations/        # Database migrations
└── config files
    ├── .env
    ├── eslint.config.js
    ├── knip.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

## Site Map

```
softwair.io/
├── / (Home)
│   └── Features:
│       ├── Hero Section
│       ├── Core Solutions
│       ├── Feature Grid
│       └── Steps
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
- **Animation**: Framer Motion 11.0.8
- **Icons**: Lucide React 0.344.0
- **Database**: Supabase
- **Analytics**: Google Analytics

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

### Core Solutions
- Custom Software Development
- Business Automations
- Industry-specific solutions

### Time Audit Tool
- Interactive questionnaire
- Industry-specific questions
- Automated calculations
- Lead capture system

### Browser Compatibility
- WebGL detection
- WebP support check
- Smooth scroll behavior
- Intersection Observer
- Safari-specific fixes

### Performance Optimizations
- Code splitting
- Lazy loading
- Image optimization
- Font preloading
- Bundle size optimization

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

### Colors
```javascript
colors: {
  primary: {
    DEFAULT: '#00D861',
    hover: '#00C058',
    light: '#E6FFF2'
  },
  secondary: {
    DEFAULT: '#1A7FFF',
    hover: '#0066E6',
    light: '#E6F0FF'
  },
  dark: {
    DEFAULT: '#121316',
    surface: '#1A1B1F',
    accent: '#2A2B2F'
  }
}
```

### Typography
```css
:root {
  --text-xs: clamp(0.75rem, 1vw, 0.875rem);
  --text-sm: clamp(0.875rem, 1.2vw, 1rem);
  --text-base: clamp(1rem, 1.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 2vw, 1.25rem);
  --text-xl: clamp(1.25rem, 2.5vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 3vw, 2rem);
  --text-3xl: clamp(2rem, 4vw, 3rem);
  --text-4xl: clamp(2.5rem, 5vw, 4rem);
}
```

### Spacing
```css
:root {
  --space-xs: clamp(0.75rem, 0.7vw, 1rem);
  --space-sm: clamp(1rem, 1.5vw, 1.5rem);
  --space-md: clamp(1.5rem, 2.5vw, 2.5rem);
  --space-lg: clamp(2rem, 4vw, 4rem);
  --space-xl: clamp(3rem, 6vw, 6rem);
}
```

## License

Private - All rights reserved