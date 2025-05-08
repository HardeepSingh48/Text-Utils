import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  // State for theme mode  
  const [mode, setMode] = useState('light');

  // Function to toggle between dark and light mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333'; // Change background to dark
      document.title = "Text Utils (Dark Mode)"; // Update page title for dark mode
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Change background to light
      document.title = "Text Utils (Light Mode)"; // Update page title for light mode
    }
  };

  return (
    <Router>
      <>
        {/* Pass mode and toggleMode as props */}
        <Navbar title="Text Utils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/about" element={
  <div style={{ color: mode === 'dark' ? 'white' : 'black' }}>
    <About mode={mode} />
  </div>
} />

            <Route exact path="/" element={<Textarea heading="Enter Your Text" mode={mode} />} />
          </Routes>
        </div>
    
      </>
    </Router>
  );
}

export default App;


