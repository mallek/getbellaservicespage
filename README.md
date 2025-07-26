# Bella Restoration Services Website

Professional restoration services website built with Angular and deployed to GitHub Pages.

## 🚀 Features

- **Modern Angular Application** - Built with Angular 20+ and Angular Material
- **Single Page Application** - Smooth scrolling navigation between sections
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Professional Gallery** - Showcases real restoration projects with category filtering
- **Service Modals** - Detailed information about each restoration service
- **24/7 Emergency Contact** - Prominent call-to-action throughout the site

## 🛠️ Development

### Prerequisites
- Node.js 22+
- npm 11+

### Setup
```bash
cd frontend
npm install
npm start
```

The application will be available at `http://localhost:4200`

### Building
```bash
cd frontend
npm run build
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages using GitHub Actions when changes are pushed to the `main` branch.

### Deployment Process:
1. Push changes to `main` branch
2. GitHub Actions automatically builds the Angular app
3. Built files are deployed to `gh-pages` branch
4. Site is live at `https://getbellaservices.com`

### Manual Deployment (if needed):
```bash
cd frontend
npm run build -- --base-href="/getbellaservicespage/"
```

## 📁 Project Structure

```
├── frontend/                 # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Reusable components
│   │   │   └── pages/        # Page components
│   │   └── assets/           # Static assets
│   └── public/               # Public assets
├── assets/                   # Legacy assets (images)
└── .github/workflows/        # GitHub Actions
```

## 🎯 Services

- Fire Damage Restoration
- Water Damage Restoration  
- Smoke Damage Cleanup
- Mold Remediation
- Professional Cleaning
- Reconstruction Services
- Emergency Board Up
- Personal & Business Property Services

## 📞 Contact

**Bella Restoration Services**
- Phone: (303) 554-8883
- Email: admin@getbellaservices.com
- Address: 460 E 76th Ave, Unit A, Denver, CO 80229
- Emergency: 24/7 Available

---

© 2012-2025 Bella Restoration Services. All rights reserved. 