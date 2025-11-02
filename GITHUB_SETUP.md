# 📤 Pushing to GitHub

## Step 1: Initialize Git Repository

```bash
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Task Management System with FastAPI and React"
```

## Step 4: Create Repository on GitHub

1. Go to https://github.com/new
2. Create a new repository (e.g., `task-management-system`)
3. **Don't** initialize with README, .gitignore, or license (we already have them)

## Step 5: Add Remote and Push

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Done! 🎉

Your project is now on GitHub.

