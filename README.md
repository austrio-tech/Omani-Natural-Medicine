# Omani Natural Medicine

A modern React web application showcasing traditional Omani natural medicines. This website presents detailed information about authentic Omani healing products with a user-friendly interface.

## Features

- **Homepage**: Hero section with featured medicines grid
- **Medicine Cards**: Display all medicines with quick preview information
- **Detailed Medicine Pages**: Comprehensive information for each medicine including:
  - Compound name
  - Description
  - Usage instructions
  - Storage requirements
  - Age guidelines
  - Safety warnings
  - Price information
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Client-side Routing**: Smooth navigation using React Router

## Medicines Included

1. **Frankincense (Omani Luban)** - 5 OMR
   - Boswellia resin compound
   - Supports respiratory health, digestion, and immunity

2. **Black Seed (Nigella Sativa)** - 3 OMR
   - Thymoquinone compound
   - Supports immune health and reduces inflammation

3. **Myrrh (Mur)** - 4 OMR
   - Commiphora resin compound
   - Traditional oral health and antiseptic uses

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HomePage.jsx
│   ├── MedicineCard.jsx
│   └── MedicineDetail.jsx
├── data/
│   └── medicines.js
├── styles/
│   ├── Header.css
│   ├── Footer.css
│   ├── HomePage.css
│   ├── MedicineCard.css
│   └── MedicineDetail.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Tech Stack

- **React 18**: Frontend framework
- **Vite**: Build tool and development server
- **React Router v6**: Client-side routing
- **CSS3**: Styling with responsive design

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Color Scheme

- **Primary Green**: #2c5f2d - Used for headers, buttons, and accents
- **Dark Green**: #1d3d1e - Used for hover states
- **Light Green**: #b8e6ba - Used for interactive highlights
- **Background**: #f5f5f5 - Light gray background
- **Text**: #333 - Dark gray text

## Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1024px
- Mobile: Below 768px

## Future Enhancements

- Product image uploads
- Shopping cart functionality
- User authentication
- Order management
- Customer reviews
- Multi-language support (Arabic/English)

## License

© 2025 Omani Natural Medicine. All rights reserved.
