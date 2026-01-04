# Fix Netlify 404 Error

## The Problem
Netlify is showing: "Your publish directory is pointing to the base directory of your site. This is not supported for Next.js sites."

## The Solution

**IMPORTANT:** When using `@netlify/plugin-nextjs`, you should NOT set a publish directory in Netlify's UI.

### Steps to Fix:

1. **Go to Netlify Dashboard**
   - Open your site in Netlify
   - Click on "Site configuration" or "Site settings"

2. **Go to Build & Deploy Settings**
   - Click on "Build & deploy" in the left sidebar
   - Scroll to "Build settings"

3. **Clear the Publish Directory**
   - Find "Publish directory" field
   - **MAKE IT EMPTY** (delete any value)
   - Leave it blank
   - Save changes

4. **Verify Build Command**
   - Build command should be: `npm run build`
   - Or leave it empty (it will use package.json)

5. **Redeploy**
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Clear cache and deploy site"
   - OR: Push a new commit to trigger auto-deploy

## Why This Happens

The `@netlify/plugin-nextjs` plugin automatically handles:
- The build output directory
- Next.js routing
- Serverless functions

Setting a publish directory in the UI **overrides** the plugin and breaks it!

## Alternative: If Plugin Doesn't Work

If the plugin still doesn't work, you can use static export instead:

1. Update `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

2. Build locally:
```bash
npm run build
```

3. Upload the `out` folder to Netlify (drag and drop)

But try the plugin first - it's better for Next.js!
