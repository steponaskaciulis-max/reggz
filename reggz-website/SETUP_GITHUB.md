# Quick GitHub Setup Guide

## Initialize and Push to GitHub

Run these commands in order:

```bash
# Navigate to project directory
cd reggz-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Reggz clothing brand website"

# Create a new repository on GitHub first, then:
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## After Pushing to GitHub

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"
6. Your site will be live in minutes!

For detailed instructions, see DEPLOYMENT.md