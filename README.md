# SouChef Cinnamon Rolls - React Single Page App

A beautiful single-page React application for ordering handcrafted cinnamon rolls.

## Features

- ✅ Single-page application (all content on one scrollable page)
- ✅ React with modern hooks (useState, useEffect)
- ✅ Order form with real-time bundle pricing
- ✅ Mix and match 4 flavors: Classic, Apple, Strawberry, Tiramisu
- ✅ Automatic bundle pricing: 1=$5, 4=$20, 9=$35
- ✅ Formspree integration for order submissions
- ✅ Responsive design
- ✅ Same beautiful styling as the original

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
cinnamon-rolls-react/
├── public/
│   ├── images/          # Logo and cinnamon roll images
│   └── index.html       # HTML template with SVG icons
├── src/
│   ├── components/
│   │   ├── Header.js    # Navigation header
│   │   ├── Hero.js      # Hero section
│   │   ├── Features.js  # Features section
│   │   ├── OrderSection.js  # Order form with state management
│   │   └── Footer.js    # Footer
│   ├── App.js           # Main app component
│   ├── index.js         # React entry point
│   └── style.css        # All styles
```

## Form Submission

The order form is already configured to submit to Formspree:
- Form ID: `mkgplvbw`
- Located in `src/components/OrderSection.js`

## Customization

- **Prices**: Edit the `calculateBundlePrice` function in `OrderSection.js`
- **Flavors**: Update the `flavors` object in `OrderSection.js`
- **Styles**: Edit `src/style.css`

