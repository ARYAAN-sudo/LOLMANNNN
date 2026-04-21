# Futuristic 3D Animation Website

A cutting-edge, interactive website built with React Three Fiber, Three.js, and modern web technologies. This showcase demonstrates advanced 3D graphics, smooth animations, and futuristic UI design.

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **3D Graphics**: React Three Fiber + Three.js
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui, Radix UI, Lucide Icons
- **Backend**: Simple Node.js with form handling (Contact page)
- **Admin Panel**: Custom dashboard with content management

## Project Structure

```
app/
├── 3d/                          # 3D components and scenes
│   ├── Canvas3D.tsx             # Reusable 3D canvas wrapper
│   ├── ParticleSystem.tsx        # Particle animation component
│   ├── MorphingShape.tsx         # Animated morphing geometry
│   ├── InteractiveObject.tsx     # Mouse-interactive 3D object
│   ├── FloatingMesh.tsx          # Floating animated mesh
│   ├── TorusKnot.tsx             # Torus knot geometry
│   ├── Globe3D.tsx               # 3D wireframe globe
│   └── scenes/
│       └── HeroScene.tsx         # Main hero 3D scene
├── components/                  # Reusable React components
│   ├── Navigation.tsx            # Top navigation bar
│   ├── Footer.tsx                # Footer with links
│   ├── ScrollAnimation.tsx        # Scroll-triggered animations
│   ├── GlitchText.tsx            # Glitch effect component
│   ├── PortfolioSection.tsx       # Portfolio showcase
│   ├── FeaturesSection.tsx        # Features grid
│   ├── CTASection.tsx             # Call-to-action section
│   ├── TestimonialsSection.tsx    # Client testimonials
│   ├── CodeShowcase.tsx           # Code highlighting
│   └── RadialMenu.tsx             # Circular menu component
├── app/                          # App-level components
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── about/page.tsx            # About page
│   ├── services/page.tsx          # Services page
│   ├── insights/page.tsx          # Blog/insights page
│   ├── contact/page.tsx           # Contact page
│   └── admin/page.tsx             # Admin dashboard
├── public/                       # Static assets
├── styles/                       # Global stylesheets
└── [config files]
```

## Key Features

### 1. **Interactive 3D Scenes**
   - Hero section with animated particles and morphing shapes
   - Floating meshes with wireframe effects
   - Rotating torus knots and geometric shapes
   - Interactive objects that respond to mouse movement

### 2. **Smooth Animations**
   - Scroll-triggered animations with Framer Motion
   - Staggered entrance animations on sections
   - Parallax effects and depth interactions
   - Glitch text effects for futuristic aesthetic

### 3. **Responsive Design**
   - Mobile-first approach
   - Adaptive layouts for all screen sizes
   - Touch-friendly navigation
   - Optimized 3D rendering for performance

### 4. **Admin Dashboard**
   - Content management interface
   - Analytics overview
   - Settings and customization options
   - Radial menu for quick access

### 5. **Pages & Sections**
   - **Home**: Hero showcase with features and testimonials
   - **About**: Team information with 3D globe visualization
   - **Services**: Service descriptions with 3D elements
   - **Insights**: Blog/article listing with categorization
   - **Contact**: Form submission with validation
   - **Admin**: Dashboard for content management

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Design System

### Colors
- **Primary**: `#00ffff` (Cyan) - Main accent
- **Secondary**: `#ff00ff` (Magenta) - Secondary accent
- **Accent**: `#ffff00` (Yellow) - Highlights
- **Background**: `#0a0e27` (Dark blue) - Base color

### Typography
- **Headings**: Geist Sans
- **Body**: Geist Sans
- **Mono**: Geist Mono

### Animations
- Smooth transitions: 0.3-0.8s
- Easing: cubic-bezier variations
- Scroll triggers: IntersectionObserver-based
- Frame-based: 60fps using Three.js

## 3D Components Guide

### Canvas3D
Wrapper component for Three.js scenes:
```tsx
<Canvas3D cameraPosition={[0, 0, 4]}>
  <ParticleSystem count={200} size={1} color={0x00ffff} />
  <FloatingMesh scale={1.5} />
</Canvas3D>
```

### ParticleSystem
Create animated particle effects:
```tsx
<ParticleSystem 
  count={300}           // Number of particles
  size={1.5}            // Particle size
  color={0x00ffff}      // Hex color
  speed={0.01}          // Animation speed
/>
```

### Interactive Objects
Mouse-tracking 3D element:
```tsx
<InteractiveObject 
  color={0xff00ff}
  scale={1.2}
/>
```

## Performance Optimization

- WebGL rendering with Three.js
- Geometry instancing for particle systems
- Lazy loading of components
- Optimized texture atlasing
- Efficient animation frame management
- Code splitting with dynamic imports

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Feel free to extend the website with:
- Additional 3D scenes
- New animation effects
- Additional pages
- Enhanced admin features
- Performance improvements

## License

Private project - All rights reserved

## Support

For issues or questions, contact the development team.
