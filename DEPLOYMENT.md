# Deployment Guide

## NPM Package Publishing

### CSS Version

```bash
cd package
npm run build
npm publish
```

### GSAP Version

```bash
cd package-gsap
npm run build
npm publish
```

## Online Demo Deployment

### Vercel Deployment

1. Connect GitHub repository to [Vercel](https://vercel.com)
2. Import project
3. Use existing `vercel.json` configuration
4. Deploy!

Or use Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify Deployment

1. Connect GitHub repository to [Netlify](https://netlify.com)
2. Import project
3. Use existing `netlify.toml` configuration
4. Deploy!

Or use Netlify CLI:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Documentation Site Deployment

### Using Docusaurus

```bash
cd docs
npm install
npm run build

# Deploy to GitHub Pages
npm run deploy

# Or manual deploy
npm run serve
```

### Deploy to Vercel/Netlify

Build and deploy `docs/build` directory.

## CloudStudio Deployment

Since this project uses Vite, you can deploy to CloudStudio:

1. Click CloudStudio in Integration menu
2. Select this project
3. Deploy

## GitHub Pages

```bash
# Build the project
npm run build

# Deploy dist directory to gh-pages branch
npx gh-pages -d dist
```

## Environment Variables

### Production

Create `.env.production`:

```
VITE_API_BASE_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Performance Optimization

### Enable Compression

Add to `vite.config.ts`:

```typescript
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
})
```

### CDN Configuration

For production, serve static assets via CDN:

```
https://cdn.universal-animations.dev/v2.0.0/
```

## Monitoring

Add analytics:

```typescript
// src/main.ts
if (import.meta.env.PROD) {
  // Google Analytics
  window.gtag('js', new Date())
  window.gtag('config', import.meta.env.VITE_ANALYTICS_ID)
}
```

## Troubleshooting

### Build Fails

- Clear cache: `rm -rf node_modules/.vite`
- Check Node version: `node -v` (should be 18+)

### Deployment Fails

- Check build output: `npm run build`
- Verify environment variables
- Check logs in deployment platform

## Support

For deployment issues:
- 📖 [Documentation](https://docs.universal-animations.dev)
- 💬 [Discord](https://discord.gg/your-invite)
- 🐛 [GitHub Issues](https://github.com/your-username/universal-animations/issues)
