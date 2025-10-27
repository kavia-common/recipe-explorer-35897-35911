import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App is the root shell layout that renders the Navbar and Sidebar and hosts
 * nested routes via <Outlet />. It also manages the theme toggle state.
 */
function App() {
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-root">
      <header className="navbar" role="banner">
        <div className="navbar-left">
          <Link to="/recipes" className="brand">
            <span className="brand-mark" aria-hidden="true">🍳</span>
            <span className="brand-name">Recipe Explorer</span>
          </Link>
        </div>
        <nav className="navbar-center" aria-label="Primary">
          <NavLink to="/recipes" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Recipes</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Favorites</NavLink>
        </nav>
        <div className="navbar-right">
          <Link to="/signin" className="btn btn-ghost">Sign In</Link>
          <button
            className="btn btn-theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <div className="app-layout">
        <aside className="sidebar" aria-label="Categories">
          <div className="sidebar-section">
            <h2 className="sidebar-title">Categories</h2>
            <ul className="sidebar-list">
              <li><a className="sidebar-link" href="#breakfast">Breakfast</a></li>
              <li><a className="sidebar-link" href="#lunch">Lunch</a></li>
              <li><a className="sidebar-link" href="#dinner">Dinner</a></li>
              <li><a className="sidebar-link" href="#dessert">Dessert</a></li>
            </ul>
          </div>
          <div className="sidebar-section muted">
            <div className="hint">Location</div>
            <div className="muted-card">
              <div className="muted-icon">📍</div>
              <div className="muted-body">
                <div className="muted-title">Discover nearby</div>
                <div className="muted-text">Find trending recipes around you.</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="content" role="main" aria-live="polite">
          <Outlet />
        </main>
      </div>

      <footer className="app-footer">
        <span className="footer-text">Route: {location.pathname}</span>
      </footer>
    </div>
  );
}

export default App;
