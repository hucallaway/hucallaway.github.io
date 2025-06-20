# The Lodge - Personal Website

A personal website built with HTML5 UP's "Minimaxing" template, featuring a unique space theme and interactive elements. This site serves as a portfolio and exploration of legal technology, space exploration, and personal interests.

## 🌟 Features

### Core Pages
- **Home** (`index.html`) - Maintenance page with countdown timer and retro aesthetic
- **Space** (`space.html`) - Interactive NASA mission tracker with budget analysis
- **Puzzles** (`puzzles.html`) - Challenge section with leaderboard
- **About** (`about.html`) - Personal background and resume
- **AI Portal** (`ai-visitor.html`) - Dedicated page for AI visitors
- **AI Log** (`ai-log.html`) - Interaction tracking and analytics

### AI Visitor Tracking System
The site includes a sophisticated AI detection and tracking system that:

- **Detects AI Visitors**: Uses multiple heuristics to identify AI systems (ChatGPT, Claude, Bard, etc.)
- **Channels AI Traffic**: Redirects AI visitors to a dedicated portal while maintaining normal user experience
- **Tracks Interactions**: Logs clicks, form submissions, page visits, and other interactions
- **Provides Analytics**: Offers detailed insights into AI visitor behavior and patterns
- **Respects Privacy**: Transparent about detection methods and data collection

#### How It Works
1. **Detection**: Analyzes user agent strings, referrer information, and browser characteristics
2. **Redirection**: AI visitors are subtly redirected to `/ai-visitor` paths while maintaining site functionality
3. **Logging**: All interactions are logged with timestamps, session IDs, and detailed metadata
4. **Storage**: Data is stored locally in localStorage with fallback to server endpoints
5. **Analysis**: The AI log page provides real-time analytics and data export capabilities

#### AI Portal Features
- Welcome message explaining the site's purpose
- Site overview and recommended pages
- AI-friendly features and structured data
- Transparent tracking policies
- Responsive design matching the site's aesthetic

## 🔧 Technical Implementation

### Security Features
- **Content Security Policy (CSP)**: Comprehensive security headers preventing XSS and injection attacks
- **HTTPS Enforcement**: All external links use secure protocols
- **Frame Protection**: X-Frame-Options prevents clickjacking
- **Content Type Protection**: X-Content-Type-Options prevents MIME sniffing
- **XSS Protection**: Additional XSS filtering with blocking mode

### Performance Optimizations
- **Consolidated CSS**: All styles in `shared.css` for better caching
- **Minified JavaScript**: Optimized script loading and execution
- **Image Optimization**: Compressed images with appropriate formats
- **Font Preloading**: Google Fonts preconnected for faster loading
- **Responsive Design**: Mobile-first approach with hamburger navigation

### Code Quality
- **Semantic HTML**: Proper use of HTML5 elements and ARIA labels
- **CSS Variables**: Consistent theming with CSS custom properties
- **Modular JavaScript**: Organized code with clear separation of concerns
- **Accessibility**: WCAG compliant with screen reader support
- **Cross-browser Compatibility**: Tested across modern browsers

## 🎨 Design System

### Color Palette
- **Primary**: Deep navy (`#0d1b2a`) - Space theme foundation
- **Accent**: Ember orange (`#e67e22`) - Interactive elements
- **Glow**: Bright orange (`#f39c12`) - Highlights and animations
- **Text**: Light gray (`#e0e0e0`) - High contrast readability

### Typography
- **Primary Font**: Google Fonts (system fallback)
- **Monospace**: For terminal-style elements
- **Responsive**: Fluid typography scaling

### Interactive Elements
- **Hover Effects**: Smooth transitions and glow effects
- **Animations**: Subtle CSS animations for engagement
- **Loading States**: Visual feedback for user actions

## 📊 AI Analytics

### Tracked Interactions
- Page visits and navigation patterns
- Click events and element interactions
- Form submissions and user input
- Time spent on pages
- Scroll behavior and viewport changes
- Session duration and exit patterns

### Detection Methods
- User agent string analysis
- Referrer information parsing
- Browser capability assessment
- Navigation timing analysis
- Behavioral pattern recognition

### Data Privacy
- No personally identifiable information collected
- Local storage with user control
- Transparent data collection policies
- Export and deletion capabilities
- Respect for AI system preferences

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local development server (optional)

### Installation
1. Clone the repository
2. Open `index.html` in a web browser
3. For development, use a local server to avoid CORS issues

### Development
- Edit HTML files for content changes
- Modify `assets/css/shared.css` for styling
- Update `assets/js/ai-tracker.js` for tracking logic
- Test across different browsers and devices

## 📁 File Structure

```
hucallaway.github.io/
├── index.html              # Main landing page
├── space.html              # NASA missions and budget analysis
├── puzzles.html            # Interactive challenges
├── about.html              # Personal background and resume
├── ai-visitor.html         # AI visitor portal
├── ai-log.html             # Interaction analytics
├── assets/
│   ├── css/
│   │   ├── main.css        # Template styles
│   │   ├── shared.css      # Custom styles and variables
│   │   ├── fontawesome-all.min.css  # FontAwesome icons
│   │   └── images/         # Background and UI images
│   ├── js/
│   │   ├── ai-tracker.js   # AI detection and tracking
│   │   ├── main.js         # Template functionality
│   │   ├── nasa-api-alternative.js # NASA data integration
│   │   ├── jquery.min.js   # jQuery library
│   │   ├── browser.min.js  # Browser detection
│   │   ├── breakpoints.min.js # Responsive breakpoints
│   │   └── util.js         # Utility functions
│   ├── webfonts/           # FontAwesome web fonts
│   ├── favicon.svg         # Custom site icon
│   └── security-headers.html # Security template
├── images/                 # Content images
├── private/                # Development and private content
│   ├── development/        # Active development files
│   ├── archive/            # Old versions and template files
│   ├── drafts/             # Content drafts and planning
│   └── README.md           # Development workflow guide
└── README.md              # This documentation
```

## 🔒 Security Considerations

### Implemented Protections
- **CSP Headers**: Prevent XSS and injection attacks
- **HTTPS Links**: Secure external connections
- **Frame Protection**: Prevent clickjacking
- **Content Validation**: MIME type enforcement
- **Permission Restrictions**: Limit browser capabilities

### AI-Specific Security
- **Transparent Detection**: Clear about AI identification methods
- **Respectful Tracking**: Non-intrusive interaction logging
- **Data Control**: User-managed data storage and export
- **Privacy First**: No personal information collection

## 🎯 Future Enhancements

### Planned Features
- **Enhanced AI Detection**: Machine learning-based visitor classification
- **Real-time Analytics**: Live dashboard for visitor insights
- **Interactive Elements**: More puzzles and challenges
- **Content Expansion**: Additional space and legal technology content
- **Performance Monitoring**: Advanced loading and interaction metrics

### Technical Improvements
- **Service Worker**: Offline functionality and caching
- **Progressive Web App**: Mobile app-like experience
- **API Integration**: Real-time NASA mission data
- **Advanced Analytics**: Heatmaps and user journey tracking

## 📄 License

This project uses the HTML5 UP "Minimaxing" template, which is free for personal and commercial use under the CCA 3.0 license. Custom modifications and content are original work.

## 🤝 Contributing

This is a personal website, but feedback and suggestions are welcome. The AI tracking system is designed to be respectful and transparent, and improvements that enhance user experience while maintaining privacy are appreciated.

## 📞 Contact

For questions about the AI tracking system or website functionality, please refer to the AI portal page or contact through the site's navigation.

---

## 🙏 Credits & Acknowledgments

### Design & Framework
- **HTML5 UP "Minimaxing" Template** by [@ajlkn](https://twitter.com/ajlkn) - [html5up.net](https://html5up.net) | Free for personal and commercial use under the CCA 3.0 license

### JavaScript Libraries
- **jQuery** - [jquery.com](https://jquery.com) | MIT License
- **Responsive Tools** - [github.com/ajlkn/responsive-tools](https://github.com/ajlkn/responsive-tools) | MIT License
- **Browser Detection** - Part of Responsive Tools suite

### Icons & Fonts
- **Font Awesome 5.15.4** by [@fontawesome](https://fontawesome.com) - [fontawesome.com](https://fontawesome.com) | Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License
- **Google Fonts** - [fonts.google.com](https://fonts.google.com) | Apache License 2.0

### External Services & APIs
- **NASA Eyes on the Solar System** - [eyes.nasa.gov](https://eyes.nasa.gov) | NASA's interactive 3D visualization platform
- **NASA APIs** - [api.nasa.gov](https://api.nasa.gov) | Free public APIs for space data
- **The Planetary Society** - [planetary.org](https://planetary.org) | Budget analysis charts and space policy content

### Demo Images (Original Template)
- **Unsplash** - [unsplash.com](https://unsplash.com) | High-quality stock photography

### Development Tools
- **GitHub Pages** - Static site hosting
- **HTML5 & CSS3** - Modern web standards
- **ES6+ JavaScript** - Modern JavaScript features

---

**Note**: This website is an experiment in making personal websites more AI-friendly while maintaining human appeal. The AI tracking system is designed to be transparent and respectful of both human and AI visitors.

**Last Updated**: December 2024  
**Version**: 2.0  
**Security Grade**: A+  
**Performance Grade**: A 