# WhatToWatch 🎬

A modern, responsive movie discovery web application built with React and TailwindCSS. Discover trending movies, search for your favorites, and maintain a personal watchlist with intelligent "Worth Watching" recommendations.

## ✨ Features

### 🔍 **Movie Discovery**
- Search movies by title with real-time results
- Browse trending movies updated daily
- Explore popular movies across all genres
- View detailed movie information including cast, trailer, and similar recommendations

### 🎯 **Smart Recommendations**
- **Must Watch** ⭐ (Rating ≥ 7.5) - Green badge
- **Worth Watching** 👍 (Rating ≥ 7.0) - Blue badge  
- **Mixed** 🤔 (Rating ≥ 6.0) - Orange badge
- **Skip** ❌ (Rating < 6.0) - Red badge

### 📱 **User Experience**
- Fully responsive design (mobile, tablet, desktop)
- Glassmorphism UI with beautiful gradients
- Smooth animations and hover effects
- Personal watchlist management
- YouTube trailer integration

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone or create the project**
```bash
npm create vite@latest whattowatch-frontend -- --template react
cd whattowatch-frontend
```

2. **Install dependencies**
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npx tailwindcss init -p
```

3. **Set up environment variables**
```bash
# Create .env file in root directory
.env
```

4. **Copy the project files** (see [Project Structure](#-project-structure) below)

5. **Start development server**
```bash
npm run dev
```

6. **Open your browser**
```
http://localhost:5173
```

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.2** - Modern React with hooks and functional components
- **Vite 4.4** - Fast build tool and development server

### **Styling**
- **TailwindCSS 3.3** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS** - Glassmorphism effects and animations

### **API Integration**
- **TMDb API** - The Movie Database for movie data
- **Native Fetch API** - Modern HTTP client
- **URL API** - Proper parameter encoding

### **State Management**
- **React Hooks** - useState, useEffect, useCallback
- **Custom Hooks** - Encapsulated watchlist logic
- **In-memory Storage** - Session-based watchlist

## 📚 API Reference

### TMDb API Endpoints Used

| Endpoint | Description | Usage |
|----------|-------------|-------|
| `/search/movie` | Search movies by title | Movie search functionality |
| `/trending/movie/day` | Get daily trending movies | Homepage trending section |
| `/movie/popular` | Get popular movies | Homepage popular section |
| `/movie/{id}` | Get movie details | Detailed movie information |
| `/movie/{id}/credits` | Get movie cast/crew | Cast information |
| `/movie/{id}/videos` | Get movie trailers | YouTube trailer links |
| `/movie/{id}/similar` | Get similar movies | Recommendations |

### Environment Variables

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```