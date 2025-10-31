# Armada BJJ Website

A modern, bilingual (English/French) Jekyll website for Armada Brazilian Jiu-Jitsu academy, inspired by mizustudio.ca design.

🌐 **Live Site**: [https://armadabjj.github.io](https://armadabjj.github.io)

## Features

- **Bilingual Support**: Full English and French translations
- **Responsive Design**: Mobile-first, modern design
- **Blog Functionality**: Jekyll-powered blog with categories and tags
- **Instructor Profiles**: Dedicated pages for each instructor
- **Program Details**: Comprehensive program descriptions
- **Contact Forms**: Trial booking and general contact forms
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment

## Structure

```
armadabjj/
├── _config.yml                 # Jekyll configuration
├── _data/
│   └── translations.yml        # Bilingual content
├── _includes/
│   ├── header.html            # Site navigation
│   └── footer.html            # Site footer
├── _layouts/
│   ├── default.html           # Base layout
│   ├── home.html              # Homepage layout
│   ├── post.html              # Blog post layout
│   └── instructor.html        # Instructor profile layout
├── _posts/                    # English blog posts
├── _instructors/              # Instructor profiles
├── assets/
│   ├── css/main.scss          # Main stylesheet
│   ├── js/main.js            # JavaScript functionality
│   └── images/               # Site images
├── fr/                       # French content
│   ├── _posts/               # French blog posts
│   ├── index.md              # French homepage
│   ├── programmes.md         # French programs page
│   ├── instructeurs.md       # French instructors page
│   ├── contact.md            # French contact page
│   └── blog.md               # French blog index
├── index.md                  # English homepage
├── programs.md               # English programs page
├── instructors.md            # English instructors page
├── contact.md                # English contact page
├── pricing.md                # Pricing page
└── blog.md                   # English blog index
```

## Getting Started

### Local Development

1. Install Jekyll and dependencies:
   ```bash
   gem install bundler jekyll
   bundle install
   ```

2. Serve the site locally:
   ```bash
   /opt/homebrew/opt/ruby/bin/bundle exec jekyll serve
   ```
   
   *Note: On macOS with Homebrew Ruby, use the full path to avoid version conflicts.*

3. Open http://localhost:4000 in your browser

### GitHub Pages Deployment

1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "Deploy from a branch" and select "main"
4. Your site will be available at `https://armadabjj.github.io`

## Customization

### Adding Content

- **Blog Posts**: Add markdown files to `_posts/` (English) or `fr/_posts/` (French)
- **Instructors**: Add profiles to `_instructors/` directory
- **Translations**: Update `_data/translations.yml` for new text content

### Styling

- Main styles are in `assets/css/main.scss`
- Uses CSS custom properties for easy theming
- Mobile-first responsive design

### Images

Add images to `assets/images/` directory. Recommended images:
- `logo.png` - Site logo
- `hero-bjj.jpg` - Homepage hero image
- `fundamentals-class.jpg` - Fundamentals program
- `advanced-class.jpg` - Advanced program
- `nogi-class.jpg` - No-Gi program
- `kids-class.jpg` - Kids program
- `womens-class.jpg` - Women's program
- `open-mat.jpg` - Open mat sessions
- Instructor photos in `instructors/` subdirectory
- Blog post featured images in `blog/` subdirectory

## Features Included

### Homepage
- Hero section with call-to-action
- About BJJ section with benefits
- Why choose Armada BJJ features
- Programs preview
- Newsletter signup

### Programs Page
- Detailed program descriptions
- Prerequisites and schedules
- Program benefits and features
- Call-to-action sections

### Instructors
- Individual instructor profiles
- Achievements and certifications
- Social media links
- Bilingual biographies

### Blog
- Post categories and tags
- Featured images
- Related posts
- Bilingual content

### Contact
- Free trial booking form
- General contact form
- Location and hours
- Map integration placeholder

### Responsive Design
- Mobile navigation menu
- Flexible grid layouts
- Touch-friendly interactions
- Fast loading times

## Technologies Used

- **Jekyll** - Static site generator
- **Sass** - CSS preprocessing
- **JavaScript** - Interactive features
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)

## Troubleshooting

### Ruby/Bundler Issues on macOS

If you encounter Ruby or Bundler errors:

1. **Use Homebrew Ruby** (recommended):
   ```bash
   # Install Homebrew Ruby if not already installed
   brew install ruby
   
   # Use full paths to avoid conflicts
   /opt/homebrew/opt/ruby/bin/bundle install
   /opt/homebrew/opt/ruby/bin/bundle exec jekyll serve
   ```

2. **Ruby 3.4+ Compatibility**:
   The Gemfile includes compatibility gems for Ruby 3.4+:
   - `csv`
   - `logger` 
   - `base64`

3. **Common Solutions**:
   ```bash
   # Reinstall Bundler
   /opt/homebrew/opt/ruby/bin/gem install bundler
   
   # Clean install
   rm -rf Gemfile.lock
   /opt/homebrew/opt/ruby/bin/bundle install
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is for Armada BJJ academy. All rights reserved.

## Support

For support with this website, contact the development team or refer to Jekyll documentation at https://jekyllrb.com/docs/
