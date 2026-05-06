# Travel Multi-Page React Application

A React application built with Vite that demonstrates multi-page routing using React Router. This app showcases navigation between different pages, parameterized routes, and responsive UI design.

## Features

- **Home Page**: Welcoming interface with navigation links
- **About Page**: Information about the application
- **Users Page**: List of users with clickable links to individual profiles
- **User Detail Page**: Detailed view of individual users accessed via parameterized routes
- **Navigation Bar**: Persistent navigation with active route highlighting
- **Responsive Design**: Mobile-friendly layout using CSS

## Technologies Used

- React 19
- React Router DOM
- Vite
- CSS for styling
- ESLint for code linting

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Navbar.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── About.jsx
│   ├── About.css
│   ├── Users.jsx
│   ├── Users.css
│   ├── UserDetail.jsx
│   └── UserDetail.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Routes

- `/` - Home page
- `/about` - About page
- `/users` - Users list page
- `/users/:id` - Individual user detail page
