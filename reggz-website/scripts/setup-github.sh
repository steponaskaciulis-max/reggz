#!/bin/bash
# Bash script to help set up GitHub repository
# Usage: ./scripts/setup-github.sh your-username reggz-website

if [ $# -lt 2 ]; then
    echo "Usage: $0 <github-username> <repo-name>"
    echo "Example: $0 johndoe reggz-website"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME=$2

echo "Setting up GitHub repository..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: Git is not installed"
    exit 1
fi

# Check if already a git repository
if [ -d .git ]; then
    echo "Git repository already initialized"
else
    echo "Initializing git repository..."
    git init
fi

# Add all files
echo "Adding files to git..."
git add .

# Check if there are changes to commit
if [ -n "$(git status --porcelain)" ]; then
    echo "Creating initial commit..."
    git commit -m "Initial commit: Reggz clothing brand website"
else
    echo "No changes to commit"
fi

# Set branch to main
echo "Setting branch to main..."
git branch -M main

# Add remote
REMOTE_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo "Adding remote origin: $REMOTE_URL"

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "Remote 'origin' already exists"
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote set-url origin $REMOTE_URL
    fi
else
    git remote add origin $REMOTE_URL
fi

echo ""
echo "Git setup complete!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub named: $REPO_NAME"
echo "2. Do NOT initialize it with README, .gitignore, or license"
echo "3. Run: git push -u origin main"
echo ""
echo "After pushing to GitHub, deploy to Vercel:"
echo "1. Go to https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Click 'Add New Project'"
echo "4. Import your repository"
echo "5. Click 'Deploy'"