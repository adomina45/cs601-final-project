# Summary Info

This is the final project submission for CS601. It is a personal portfolio website built using React with TypeScript, leveraging deployed via Netlify.

Link: https://cs601-final.netlify.app/

## Features

* Component-based design using React
* Strong typing with TypeScript
* Responsive CSS design using Flexbox, CSS Grid, and Media Queries
* Contact form (with controlled form state)
* Lightbox photo gallery
* Resume download capability
* API requests to get Github data and send emails

## File Structure
```
├── public/                 # Static assets and public files
│   ├── assets/             # Image assets
│   └── download/           # Resume PDF
|   └── _redirects          # Redirects for netlify  
├── src/                    # Source code
│   ├── App.tsx             # Main React App Component
│   ├── main.tsx            # Entry point for Vite
│   ├── components/
│   │ ├──ContactForm.tsx    # Contact Form Component
│   │ ├── Footer.tsx        # Footer Component
│   │ ├── Header.tsx        # Header Component
│   │ ├── HamburgerNav.tsx  # Nav Component
│   │ ├── Lightbox.tsx      # Lightbox for photo grid Component
│   │ ├── PhotoGrid.tsx     # PhotoGrid Component
│   │ └── PortfolioGrid.tsx # PortfolioGrid Component
│   ├── pages/
│   │ ├── Contact.tsx       # Contact Page
│   │ ├── Home.tsx          # Home Page
│   │ ├── Photos.tsx        # Photos Page
│   │ ├── Portfolio.tsx     # Portfolio Page
│   │ └── Resume.tsx        # Resume Page
│   ├── styles/
│   │ └── main.css          # CSS for website
│   ├── types/
│     └── types.ts          # Types for website
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
├── netlify.toml            # Netlify deployment configuration
├── tsconfig*.json          # TypeScript configuration files
└── README.md               # Read me
```

## Technologies Used
* React & JSX
* TypeScript
* Vite
* Netlify
* CSS Flexbox, Grid, & Media Queries
* API Endpoints
* SVGs

## How To Run
```bash
  # Install dependencies
  npm install

  # Start local development server
  npm run dev

  # Start test production deploy
  ntl deploy

  # Start production deploy
  ntl deploy --prod
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
