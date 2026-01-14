# Southern Maryland Mailbox Services Website

A professional, mobile-friendly, SEO-optimized static website for a mailbox installation and repair business serving Calvert, St. Mary's, and Charles Counties in Maryland.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Mobile Responsive**: Fully optimized for all device sizes
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Fast Performance**: Static site generation with Astro for lightning-fast load times
- **Multiple Pages**:
  - Home - Overview and service highlights
  - Services - Detailed service descriptions
  - Pricing - Transparent pricing information
  - Why Curb Appeal - Educational content about mailbox importance
  - Custom Options - Mailbox styles, posts, house numbers, lighting
  - Contact - Contact form and business information

## Technology Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment to GitHub Pages

### 1. Create GitHub Repository

1. Go to GitHub and create a new repository (e.g., `mailbox-service`)
2. Don't initialize with README (we already have one)

### 2. Configure Astro for GitHub Pages

Update `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/mailbox-service', // Replace with your repo name
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### 3. Add GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 10
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/yourusername/mailbox-service.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Wait for the workflow to complete
5. Your site will be live at `https://yourusername.github.io/mailbox-service/`

## Alternative: Deploy to Netlify, Vercel, or Cloudflare Pages

All of these platforms offer free static site hosting:

### Netlify
1. Connect your GitHub repository
2. Build command: `pnpm build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Astro
3. Deploy

### Cloudflare Pages
1. Connect your GitHub repository
2. Build command: `pnpm build`
3. Build output directory: `dist`

## Customization

### Update Contact Information

Edit `/src/pages/contact.astro`:
- Phone number: Replace `(555) 555-1234` with your actual number
- Email address: Replace `info@somdmailbox.com` with your email
- Business hours: Update as needed

### Update Service Area

Edit `/src/pages/index.astro` and `/src/components/Footer.astro`:
- Service area cities
- Counties served

### Update Pricing

Edit `/src/pages/pricing.astro`:
- Service prices
- Package details

### Change Colors

Edit `/src/styles/global.css` or use Tailwind's configuration to change the blue color scheme.

### Add Logo

1. Place your logo in `/public/` directory
2. Update the navigation in `/src/components/Navigation.astro`

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta descriptions on all pages
- Open Graph tags
- Proper heading hierarchy
- Alt text for images (when you add them)
- Mobile-friendly design
- Fast loading times

### Adding Images

To add images (recommended for better engagement):
1. Place images in `/public/images/`
2. Add them to relevant pages
3. Always include descriptive alt text

Example:
```html
<img src="/images/mailbox-installation.jpg" alt="Professional mailbox installation in Southern Maryland" />
```

## Performance

The site is optimized for performance:
- Static generation (no server-side rendering needed)
- Minimal JavaScript
- Optimized CSS with Tailwind
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Project Structure

```
mailbox-service/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Page routes
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── pricing.astro
│   │   ├── curb-appeal.astro
│   │   ├── custom-options.astro
│   │   └── contact.astro
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── package.json
└── README.md
```

## License

This website is proprietary. All rights reserved.

## Support

For questions about the website, contact the developer or refer to:
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
