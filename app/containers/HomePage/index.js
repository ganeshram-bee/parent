/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/childApp1">Go to childApp1</Link>
    </div>
  );
}
