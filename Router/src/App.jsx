import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './index.css';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';



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
          <Route path="/home/:shade" element={<Home />} />
          <Route path="/blue/:shade" element={<Blue />} />
          <Route path="/red/:shade" element={<Red />} />
        </Routes>
      </div>
    </div>
    <footer className='footer'>
    <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
    </footer>
    </>
  )
}

export default App;
