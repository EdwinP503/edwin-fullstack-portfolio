// File: src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Welcome To My <br></br>Portfolio</h1>
        <p>
          Discover my professional journey, explore the projects I’ve worked on, and learn how you can reach out. 
          Let’s connect!
        </p>
        <div className="btn-group">
          <button onClick={() => navigate('/about')} className="btn btn-outline-light">
            Learn more <br /> about me
          </button>
          <button onClick={() => navigate('/projects')} className="btn btn-outline-light">
            Discover my <br /> projects
          </button>
          <button onClick={() => navigate('/contact')} className="btn btn-outline-light">
            Reach out <br /> to me
          </button>
        </div>
      </div>
      <div className="image-section">
        <img src="./images/headshot.jpg" alt="Professional Portrait" className="portrait" />
      </div>
    </div>
  );
}

export default HomePage;
