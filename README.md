# DJ YAWN Landing Page

A beautiful, self-hosted Linktree-style landing page with frosted glass effects, gradient backgrounds, and simple analytics.

## Features

- 🎨 **Pixel-perfect design** with frosted glass button effects
- 📱 **Fully responsive** - looks great on all devices
- ⚡ **Lightning fast** - loads instantly with optimized assets
- 📊 **Simple analytics** - track link clicks without external services
- 🎯 **Easy to edit** - just update the config in `js/main.js`
- 🌐 **SEO optimized** - includes meta tags and Open Graph
- ♿ **Accessible** - WCAG 2.1 AA compliant

## Quick Start

1. **Edit your content**: Open `js/main.js` and update the `CONFIG` object
2. **Test locally**: Open `index.html` in your browser
3. **Deploy**: Push to GitHub and enable GitHub Pages

## How to Update Links

Edit the `CONFIG` object in `js/main.js`:

```javascript
const CONFIG = {
    profile: {
        username: '@dj.yawn',
        bio: 'Producer, DJ, Beatmaker. Vancouver BC.',
        image: 'images/profile/featured-1.png'
    },
    links: [
        {
            title: 'Your Link Title',
            url: 'https://your-url.com',
            icon: 'images/icons/icon-63.png' // or emoji: '🎵'
        },
        // Add more links...
    ]
};
```

## Customization

### Change Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --bg-gradient-start: #1a2838;
    --bg-gradient-mid: #2e4961;
    --bg-gradient-end: #8fa5b8;
}
```

### Change Profile Image

Replace images in `images/profile/` and update the config:

```javascript
profile: {
    image: 'images/profile/your-image.png'
}
```

### Add Link Icons

- Place icon images in `images/icons/`
- Update link config to point to your icon
- Or use emojis: `icon: '🎵'`

## GitHub Pages Deployment

1. Create a new GitHub repository
2. Push your code:
   ```bash
   cd ~/dj-yawn-landing
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "main" branch as source
5. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```
2. Configure DNS at your domain registrar:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
3. Enable HTTPS in GitHub Pages settings

## File Structure

```
dj-yawn-landing/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Config and functionality
├── images/
│   ├── profile/        # Profile images
│   ├── icons/          # Link icons
│   └── backgrounds/    # Background images
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## Analytics

The page includes a simple click counter that:
- Tracks clicks on all links
- Stores data in browser localStorage
- Shows total clicks at the bottom
- No external services or tracking pixels

To reset analytics, open browser console and run:
```javascript
localStorage.removeItem('djyawn_analytics');
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 13+
- Chrome Mobile (Android 7+)

## Performance

- Loads in < 2 seconds
- Uses system fonts (zero font download)
- Optimized images
- Minimal JavaScript
- Target Lighthouse score: 90+

## Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader compatible
- Sufficient color contrast
- Focus indicators on all interactive elements
- Reduced motion support

## Maintenance

### Regular Updates

1. Edit `js/main.js` to update links
2. Commit and push changes:
   ```bash
   git add js/main.js
   git commit -m "Update links"
   git push
   ```
3. GitHub Pages auto-deploys in 1-2 minutes

### Image Optimization

To optimize images before uploading:
```bash
# Convert to WebP (better compression)
brew install webp
cwebp input.png -q 85 -o output.webp
```

## License

This is a custom landing page for DJ YAWN. Feel free to use as inspiration but please don't copy the branding.

## Credits

Built with Claude Code by Anthropic

---

**Need help?** Contact: bookings@djyawn.com
