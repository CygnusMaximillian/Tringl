# Tringl - Travel Booking Platform

A modern, responsive travel booking platform built with React that helps users discover and compare travel packages from trusted providers.

## 🏗️ Project Structure

The project has been reorganized for better maintainability and scalability:

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Features, Destinations, etc.)
│   ├── ui/              # Reusable UI components (Cards, Buttons, etc.)
│   └── auth/            # Authentication components (Login, Signup)
├── pages/                # Page components
├── assets/
│   ├── images/          # Image assets
│   └── icons/           # Icon assets
├── styles/               # Global styles and utilities
└── App.jsx              # Main application component
```

## 🚀 Features

- **Hero Section**: Beautiful hero area with search functionality
- **Features Section**: Showcases platform benefits
- **Destinations Section**: Interactive destination showcase with filtering
- **Testimonials Section**: Customer reviews and ratings
- **Call-to-Action Section**: Tropical beach background with CTA button
- **Responsive Design**: Mobile-first approach with modern UI/UX

## 🛠️ Components

### Layout Components
- `Header`: Navigation with logo, menu, and auth buttons
- `Footer`: Comprehensive footer with links and contact info

### Section Components
- `HeroSection`: Main hero area with search form
- `FeaturesSection`: Platform features showcase
- `DestinationsSection`: Destination cards with category filtering
- `TestimonialsSection`: Customer reviews display
- `CallToActionSection`: Call-to-action with background image

### UI Components
- `PlaceCard`: Destination information cards
- `ReviewCard`: Customer review display cards

## 🎨 Styling

- **CSS Modules**: Component-specific styling
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional design with hover effects
- **Color Scheme**: Green primary (#059669) with neutral grays

## 📱 Responsiveness

The application is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 File Organization Benefits

- **Logical Grouping**: Components are organized by function
- **Easy Navigation**: Clear folder structure for developers
- **Scalability**: Easy to add new features and components
- **Maintainability**: Related files are grouped together
- **Reusability**: UI components can be easily reused across sections

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add CSS file with matching name
3. Import and add to `src/pages/Home.jsx`

### Adding New UI Components
1. Create component in `src/components/ui/`
2. Add CSS file with matching name
3. Import and use in relevant sections

### Styling Changes
- Component-specific styles: Edit individual CSS files
- Global styles: Modify `src/styles/Home.css`
- Color scheme: Update CSS variables in component files

## 📸 Image Assets

**Required Images**:
- `src/assets/images/hero-bg.jpg` - Hero section background
- `src/assets/images/frameimg2.png` - Call-to-action background

**Image Recommendations**:
- High resolution (1920x1080 or larger)
- Travel/destination themed
- Optimized for web (compressed JPG/PNG)

## 🎯 Future Enhancements

- User authentication system
- Booking functionality
- Payment integration
- Admin dashboard
- Multi-language support
- Advanced search filters
- Wishlist functionality
- Social sharing features
