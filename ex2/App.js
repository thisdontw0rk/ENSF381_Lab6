import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = false;

  return (
    <div>
      {/* Exercise 1 Content */}
      <h1>ENSE-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>

      {/* Exercise 2 Components */}
      <Home 
        title="Home Page" 
        description="Welcome to our website." 
      />
      <About 
        title="About Us" 
        description="We are passionate about delivering quality experiences." 
      />
      <Contact 
        title="Contact Us" 
        description="Feel free to reach out to us via email or phone." 
      />
    </div>
  );
}

export default App;