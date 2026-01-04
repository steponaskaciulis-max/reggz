# Deployment Guide for Reggz Website

This guide will help you deploy the Reggz website to GitHub and Vercel.

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (you can sign up at https://vercel.com)

## Step 1: Install Dependencies

First, navigate to the project directory and install dependencies:

```bash
cd reggz-website
npm install
```

## Step 2: Initialize Git Repository

Initialize a Git repository (if not already initialized):

```bash
git init
git add .
git commit -m "Initial commit: Reggz website"
```

## Step 3: Create GitHub Repository

1. Go to GitHub and create a new repository
2. Name it something like `reggz-website` or `reggz-clothing`
3. **Do NOT** initialize it with README, .gitignore, or license (we already have these)
4. Copy the repository URL

## Step 4: Push to GitHub

Connect your local repository to GitHub and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 5: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in (or create an account)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Configure settings:
   - Framework Preset: Next.js
   - Root Directory: `./` (or leave default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
6. Click "Deploy"
7. Wait for deployment to complete (usually 2-3 minutes)
8. Your site will be live at a URL like `https://reggz-website.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? (select your account)
   - Link to existing project? No
   - Project name: reggz-website
   - Directory: ./
   - Override settings? No

5. For production deployment:
   ```bash
   vercel --prod
   ```

## Step 6: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Step 7: Environment Variables (If Needed)

If you need to add environment variables:

1. Go to Vercel dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy your site

## Continuous Deployment

Vercel automatically deploys your site whenever you push to the main branch. Just:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically build and deploy your changes.

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Make sure all dependencies are installed: `npm install`
- Check build logs in Vercel dashboard for specific errors

### Images Not Loading

- Ensure images are from allowed domains (configured in `next.config.js`)
- Check image URLs are correct

### Styles Not Applied

- Make sure Tailwind CSS is properly configured
- Check `tailwind.config.ts` includes all content paths
- Rebuild: `npm run build`

## Support

For issues or questions:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Check project README.md for more information