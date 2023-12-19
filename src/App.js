import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';
import About from './components/About';
import Users from './components/Users';
import Borrowod from './components/Borrowod';

const Home = () => {
  
    return (
      <div className="home-container">
      <header>
        <h2>Welcome to Our Website</h2>
        <p>Discover the Best of Everything</p>
      </header>

      <section className="features">
        <div className="feature">
          <h3>Explore</h3>
          <p>Discover a wide range of content and services.</p>
        </div>
        <div className="feature">
          <h3>Connect</h3>
          <p>Join our community and connect with like-minded individuals.</p>
        </div>
        <div className="feature">
          <h3>Enjoy</h3>
          <p>Experience the joy of high-quality entertainment.</p>
        </div>
      </section>

      <footer>
      </footer>
    </div>
    );
  // };
  
  };

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/about" component={About} />
            <Route path="/Users" component={Users} />
            <Route path="/borrowod" component={Borrowod} />

          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App