# Aether Gallery

A premium, interactive digital art showcase featuring curated collections of nature, urban architecture, and space imagery with immersive lightbox experience.

## Features

✨ **Interactive Gallery**
- Responsive grid layout that adapts to all screen sizes
- Smooth image transitions and hover effects
- Immersive lightbox viewer for detailed image exploration

🔍 **Advanced Search & Filtering**
- Real-time search functionality to find images by title or description
- Category-based filtering (Nature, Urban, Space)
- Tag-based browsing for enhanced discoverability

🎨 **Modern Design**
- Dark theme with ambient glows and gradients
- Premium typography using Google Fonts (Outfit, Plus Jakarta Sans)
- Smooth animations and transitions
- Custom CSS design tokens for consistent styling

📱 **Responsive Design**
- Optimized for desktop, tablet, and mobile devices
- Fluid typography and spacing
- Touch-friendly interface

## Gallery Collections

### Nature
- **Silent Sanctuary** - Mystical redwood forest with sunbeams
- **Celestial Glow** - Aurora borealis over snowy mountains

### Urban
- **Neo-Tokyo Pulse** - Cyberpunk street with neon lights
- **Monolithic Geometry** - Brutalist architectural curves

### Space
- **Chroma Nebula** - Colorful stellar dust cloud
- **Cosmic Rings** - Planetary rings against starfield

## Project Structure

```
image-gallery/
├── index.html          # Main HTML markup
├── styles.css          # Complete stylesheet with design tokens
├── app.js              # JavaScript application logic
├── images/             # Image assets
│   ├── nature_aurora.png
│   ├── nature_forest.png
│   ├── space_nebula.png
│   ├── space_rings.png
│   ├── urban_brutalist.png
│   └── urban_cyberpunk.png
└── README.md           # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/namansinghal12/image-gallery.git
cd image-gallery
```

2. Open in your browser:
- Simply open `index.html` in your web browser
- Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## Usage

### Search
- Type in the search box to filter images by title or description
- Results update in real-time

### Filter by Category
- Click category buttons to view images from specific collections
- Select "All" to view the complete gallery

### View Images
- Click any image to open the lightbox viewer
- Navigate between images using arrow buttons
- Close the lightbox by clicking the X button or clicking outside the image

### Explore Tags
- Hover over images to see associated tags
- Tags help categorize and discover related imagery

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, flexbox, and grid
- **Vanilla JavaScript** - No frameworks or libraries required
- **Google Fonts** - Premium typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Add New Images

1. Place your image files in the `images/` folder
2. Add an entry to the `artworkRepository` array in `app.js`:

```javascript
{
  id: 7,
  title: "Your Image Title",
  category: "nature", // or "urban", "space"
  src: "images/your_image.png",
  description: "Description of your image",
  tags: ["Tag1", "Tag2", "Tag3"],
  alt: "Accessibility description"
}
```

### Modify Styling

Edit `styles.css` to customize:
- Color palette (CSS variables in `:root`)
- Typography and fonts
- Spacing and layout
- Animations and transitions

## Performance

- Optimized image delivery
- Efficient DOM manipulation
- Smooth CSS animations (60fps)
- Minimal JavaScript overhead

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for all images

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest new features
- Submit pull requests
- Improve documentation

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Aether Gallery** — A curated sanctuary of digital imagery, fluid architecture, and astronomical wonders.
