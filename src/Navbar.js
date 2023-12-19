import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;