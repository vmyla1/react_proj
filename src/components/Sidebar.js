import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCog, FaUsers, FaInfoCircle } from 'react-icons/fa';
import './Sidebar.css'; 

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
      <div className="toggle-btn" onMouseEnter={() => setSidebarOpen(true)} onMouseLeave={() => setSidebarOpen(false)}>
        ☰
      </div>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <FaHome />
        Home
      </Link>
      <Link to="/borrowod" className={location.pathname === '/' ? 'active' : ''}>
        <FaHome />
        Image
      </Link>
      <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
        <FaCog />
        Settings
      </Link>
      <Link to="/users" className={location.pathname === '/users' ? 'active' : ''}>
        <FaUsers />
        Users
      </Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        <FaInfoCircle />
        About
      </Link>
    </div>
  );
};

export default Sidebar;