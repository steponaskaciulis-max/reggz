# Auto-Push to GitHub

This folder contains all the files for your Reggz website. To automatically push them to GitHub:

## Quick Start

1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win
   - Install with default options

2. **Get a GitHub Personal Access Token**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" > "Generate new token (classic)"
   - Name it: "Reggz Auto-Push"
   - Select scope: **`repo`** (full control of private repositories)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

3. **Run the auto-push script**:
   ```powershell
   cd C:\Users\stepo\Desktop\reggz-website
   .\auto-push.ps1
   ```
   
   The script will prompt you for:
   - Your GitHub Personal Access Token
   - Your GitHub username
   - Your repository name (default: reggz-website)

4. **Done!** Vercel will automatically redeploy your site.

## What the script does:

- ✓ Initializes git repository (if needed)
- ✓ Adds all files to git
- ✓ Commits changes with message "Add all Reggz website files"
- ✓ Configures remote repository with your token
- ✓ Pushes to GitHub (main branch)
- ✓ Vercel automatically redeploys!

## Alternative: Using Parameters

You can also run the script with parameters:

```powershell
.\auto-push.ps1 -GitHubToken "your_token_here" -GitHubUsername "your_username" -RepoName "reggz-website"
```

## Troubleshooting

**Error: Git not found**
- Install Git: https://git-scm.com/download/win
- Restart PowerShell after installation

**Error: Repository doesn't exist**
- Create the repository on GitHub first
- Go to: https://github.com/new
- Name it: `reggz-website` (or your preferred name)
- Don't initialize with README (we already have files)

**Error: Permission denied**
- Make sure your token has `repo` scope
- Generate a new token if needed

**Error: Invalid credentials**
- Double-check your username and token
- Make sure you copied the entire token

## Security Note

- Never share your GitHub token
- The token is used in the remote URL but only stored locally
- You can revoke the token at any time: https://github.com/settings/tokens
