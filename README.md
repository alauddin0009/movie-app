# 🎬 Movie App

A React practice project for learning modern frontend development. This app fetches current favorite movies from The Movie Database API and allows users to build their personal favorite movies collection.

![Movie App Screenshot](./src/assets/screenshots/Full_page%20view%20of%20Movie-App.png)

## ✨ Features

- **API Integration** - Fetches real movie data from TMDB
- **Favorite System** - Heart icon to save/remove favorite movies
- **Search Functionality** - Filter movies by title starting letters
- **Dedicated Favorites Page** - Separate route for saved movies
- **Local Storage** - Persists favorites between sessions
- **Responsive Design** - Works on all devices

## 🛠️ Tech Stack

- **Frontend:** React
- **Routing:** React Router DOM
- **State Management:** useState, useEffect, seContext, Custom Hooks
- **API:** The Movie Database (TMDB)
- **Storage:** Browser LocalStorage
- **Build Tool:** Vite
- **Styling:** CSS

## 🚀 Live Demo

[Movie App](https://movie-app-6ban.onrender.com/)

## 📁 Project Structure
src/
├── assets/
│ ├── Components/
│ │ ├── FavMovies.jsx
│ │ ├── Home.jsx
│ │ ├── MovieCard.jsx
│ │ ├── MovieCard.css
│ │ ├── Navbar.jsx
│ │ └── Navbar.css
│ ├── Contexts/
│ │ └── MovieContext.jsx
│ ├── screenshots/
│ │ ├── Full_page view of Movie-App.png
│ │ ├── Harry potter Search result from API call.png
│ │ ├── List of favorite movies - api_call.png
│ │ ├── Filter movie that start with search input.png
│ │ └── List of user's favorite movies in child page (Favorite Movies).png
│ ├── api.js
│ └── movie-icon.png
├── App.js
├── App.css
├── main.js
└── index.css


## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/movie-app.git

# Navigate to project directory
cd movie-app

# Install dependencies
npm install

# Start development server
npm run dev
🎬 How It Works
Home Page - Fetches and displays current favorite movies from TMDB API

Favorite Selection - Click heart icon on any movie to add to favorites

Search - Type in search box to filter movies by title starting letters among loaded movies

Favorites Page - Access saved movies via navigation menu

Persistence - Favorites saved in LocalStorage survive browser restarts

🎣 React Concepts Practiced
useState - Managing component state

useEffect - API calls and side effects

useContext - Global state management

Custom Hooks - Reusable logic

React Router - Client-side navigation

Component Composition - Reusable MovieCard component

Event Handling - Click events for favorites

Conditional Rendering - Search results display


```
Grab All favorite movies for TMDB at the Beginning. User can add a movie to favorite list clicking the love icon.

![🎥 API Integration - All Favorite movies from TMDB](./src/assets/screenshots/List%20of%20favorite%20movies%20-%20api_call.png)

Filter the movie lists that start with search criteria 

![🔍 Search Feature](./src/assets/screenshots/Filter%20movie%20that%20start%20with%20search%20input.png)

Real-time filtering that shows movies starting with the search query.

![💖 Favorites Management](./src/assets/screenshots/List%20of%20user's%20favorite%20movies%20in%20child%20page%20(Favorite%20Movies).png)

Save and manage personal movie collection with persistent storage.

![🎥 API Integration](./src/assets/screenshots/Harray%20potter%20Search%20result%20from%20API%20call.png)



Fetches real movie data including titles, release years, and posters from TMDB.


🛣️ Routes
/ - Home page with movie list and search

/favorites - Personal favorite movies collection

🚧 Learning Objectives
This project demonstrates understanding of:

Modern React development with hooks

External API integration

Client-side routing

State management patterns

Browser storage APIs

Responsive UI design

Component architecture


This project is open source.

Movie data provided by The Movie Database (TMDB)

Built as a React learning project with ❤️