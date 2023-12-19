import React from 'react';
import './Users.css';


const Users = () => {
  return( <div className="home-container">
  <header>
    <h1>Users</h1>
    <p>Discover the Best of Everything</p>
  </header>

  <section className="features">
    <div className="feature">
      <h2>Explore</h2>
      <p>Discover a wide range of content and services.</p>
    </div>
    <div className="feature">
      <h2>Connect</h2>
      <p>Join our community and connect with like-minded individuals.</p>
    </div>
    <div className="feature">
      <h2>Enjoy</h2>
      <p>Experience the joy of high-quality entertainment.</p>
    </div>
  </section>

</div>);
};

export default Users;