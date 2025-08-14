# Simple Deployment Script for Company Portfolio
Write-Host "Starting deployment preparation..." -ForegroundColor Green

# Check if build folder exists, if not build the project
if (-not (Test-Path "build")) {
    Write-Host "Building project..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "Build successful!" -ForegroundColor Green
} else {
    Write-Host "Build folder already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "Next steps to deploy:" -ForegroundColor Cyan
Write-Host "1. Create a GitHub repository" -ForegroundColor White
Write-Host "2. Update homepage in package.json with your GitHub Pages URL" -ForegroundColor White
Write-Host "3. Run these git commands:" -ForegroundColor White
Write-Host "   git init" -ForegroundColor Gray
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Initial commit'" -ForegroundColor Gray
Write-Host "   git remote add origin https://github.com/[username]/[repo].git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host "4. Enable GitHub Pages in repository settings" -ForegroundColor White
Write-Host "5. Your site will auto-deploy via GitHub Actions!" -ForegroundColor White

Write-Host ""
Write-Host "Deployment preparation complete!" -ForegroundColor Green
