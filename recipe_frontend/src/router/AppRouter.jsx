import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';

/**
 * PUBLIC_INTERFACE
 * AppRouter sets up the top-level route map for the application.
 * It includes a root layout (App) and nested routes for primary pages.
 *
 * Routes:
 * - /                -> Redirects to /recipes
 * - /recipes         -> Recipes listing page (placeholder)
 * - /recipes/:id     -> Recipe detail page (placeholder)
 * - /favorites       -> Favorites page (placeholder)
 * - /signin          -> Sign in page (placeholder)
 */
export default function AppRouter() {
  return (
    <Routes>
      {/* Root layout contains navbar + sidebar and an <Outlet /> to render nested routes */}
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/recipes" replace />} />
        <Route path="recipes" element={<Placeholder title="Recipes" description="Browse all recipes" />} />
        <Route path="recipes/:id" element={<Placeholder title="Recipe Details" description="View recipe details" />} />
        <Route path="favorites" element={<Placeholder title="Favorites" description="Your saved recipes" />} />
        <Route path="signin" element={<Placeholder title="Sign In" description="Access your account" />} />
        {/* Catch-all to recipes */}
        <Route path="*" element={<Navigate to="/recipes" replace />} />
      </Route>
    </Routes>
  );
}

/**
 * Simple placeholder component used until pages are implemented.
 * Provides a consistent look within the layout.
 */
function Placeholder({ title, description }) {
  return (
    <div className="content-surface">
      <div className="content-header">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{description}</p>
      </div>
      <div className="placeholder-card">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
      </div>
    </div>
  );
}
