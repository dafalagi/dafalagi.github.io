# 🚀 Dafalagi Portfolio

A modern, responsive portfolio website showcasing full-stack development projects and professional experience. Built with a focus on performance, accessibility, and maintainability.

<!-- ![Portfolio Preview](assets/img/favicon.webp) -->

## 🌟 Features

### Core Functionality
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Dynamic Project Display**: JSON-driven project cards with automatic generation
- **Interactive Modals**: Detailed project information with tech stack badges
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimization

### User Experience
- **Sticky Navigation**: Always accessible navigation with active section highlighting
- **Mobile-First**: Progressive enhancement from mobile to desktop
- **Fast Loading**: Optimized assets and minimal dependencies
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with custom properties and animations
- **JavaScript (ES6+)**: Vanilla JS for optimal performance
- **Tailwind CSS**: Utility-first CSS framework for rapid development

### Libraries & Tools
- **Font Awesome**: Icon library for consistent iconography
- **Devicon**: Technology icons for tech stack visualization
- **Google Fonts**: Inter font family for modern typography

### Architecture
- **Modular JavaScript**: Separated concerns with dedicated modules
- **JSON Data Management**: Centralized project data for easy maintenance
- **CSS Custom Properties**: Theme system supporting multiple color schemes
- **Component-Based Styling**: Reusable CSS classes and utilities

## 📁 Project Structure

```
dafalagi.github.io/
├── index.html                 # Main portfolio page
├── assets/
│   ├── css/
│   │   └── styles.css        # Custom styles and theme variables
│   ├── js/
│   │   ├── scripts.js        # Core functionality (navigation, theme, animations)
│   │   ├── modal.js          # Project modal management
│   │   ├── projects.js       # Dynamic project card generation
│   │   └── tailwind-config.js # Tailwind CSS configuration
│   ├── json/
│   │   └── project-data.json # Project information database
│   ├── img/                  # Profile images and icons
│   └── banner/              # Project banner images
├── LICENSE
└── README.md
```

## 🎨 Design System

### Color Palette
```css
/* Light Theme */
--primary-white: #ffffff
--secondary-gray: #f8f9fa
--text-dark: #212529
--accent-blue: #007bff

/* Dark Theme */
--primary-black: #0d1117
--secondary-black: #161b22
--text-light: #f0f6fc
--accent-gray: #8b949e
```

### Typography
- **Font Family**: Inter (400, 600, 700)
- **Responsive Scaling**: Fluid typography with clamp() functions
- **Hierarchy**: Clear type scale from body text to headings

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, but recommended for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dafalagi/dafalagi.github.io.git
   cd dafalagi.github.io
   ```

2. **Serve locally** (optional)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Or simply open index.html in your browser
   ```

3. **Access the portfolio**
   - Local: `http://localhost:8000`
   - Live: `https://dafalagi.github.io`

## 📊 Project Data Management

The portfolio uses a JSON-driven approach for project management:

### Adding New Projects
Edit `assets/json/project-data.json`:
```json
{
  "projectX": {
    "title": "Project Name",
    "excerpt": "Brief project description",
    "image": "assets/banner/project-image.webp",
    "buttonColor": "green", // or "blue"
    "description": "Detailed project description",
    "contributions": ["Contribution 1", "Contribution 2"],
    "techStack": ["Technology1", "Technology2"],
    "liveLink": "https://project-url.com" // or null
  }
}
```

### Tech Stack Badges
Supported technologies with authentic brand colors:
- **Languages**: Python, JavaScript, PHP, HTML, CSS
- **Frameworks**: Laravel, Django, Bootstrap, Tailwind CSS
- **Databases**: MySQL, PostgreSQL, Redis
- **Tools**: Google Cloud, Livewire

## 🎯 Key Features Deep Dive

### Dynamic Project System
- **Automatic Generation**: Projects are generated from JSON data
- **Responsive Cards**: Grid layout adapts to content and screen size
- **Color Coding**: Alternating button colors for visual variety
- **Modal Integration**: Seamless transition to detailed project view

### Theme System
- **System Preference Detection**: Automatically detects user's preferred theme
- **Manual Toggle**: Easy switching between light and dark modes
- **Persistent Storage**: Remembers user's theme preference
- **Smooth Transitions**: Animated theme changes

### Performance Optimizations
- **Minimal Dependencies**: Only essential external resources
- **Efficient Animations**: CSS transforms and GPU acceleration
- **Optimized Assets**: Compressed images (WebP format)
- **Clean JavaScript**: Vanilla JS without heavy frameworks

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📈 Performance Notes

To get accurate performance metrics for your portfolio, you can:
- Run [Google Lighthouse](https://pagespeed.web.dev/) on your live site
- Use browser DevTools Performance tab
- Test with [GTmetrix](https://gtmetrix.com/) or [WebPageTest](https://www.webpagetest.org/)

The portfolio is built with performance best practices in mind, including WebP images and minimal external dependencies.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Dafalagi** - [GitHub Profile](https://github.com/dafalagi)

Project Link: [https://github.com/dafalagi/dafalagi.github.io](https://github.com/dafalagi/dafalagi.github.io)

Live Demo: [https://dafalagi.github.io](https://dafalagi.github.io)

---

⭐ **If this project helped you, please give it a star!** ⭐
