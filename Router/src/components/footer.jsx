import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
  
    return (
      <footer>
        <nav>
          <ul>
            <li>
              <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blue" className={location.pathname === '/blue' ? 'active' : ''}>
                Blue
              </Link>
            </li>
            <li>
              <Link to="/red" className={location.pathname === '/red' ? 'active' : ''}>
                Red
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
  
  export default Footer;