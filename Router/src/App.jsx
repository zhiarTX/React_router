import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './index.css';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import Footer from './components/footer';


function App() {
  return (
    <>
     <div id="container">
      <nav id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </nav>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App;
