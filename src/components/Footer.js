import React from 'react'
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
 return (
  <div className="nav-footer">
   <footer className="nav-footer-2">
    <ul>
     <li><Link to="/advertising">Advertising</Link></li>
     <li><Link to="/business">Business</Link></li>
     <li><Link to="/howsearchworks">How Search Works</Link></li>
    </ul>
    <ul>
     <img src="./images/download.png" alt="" />
     <li><Link to="/carbon">Carbon Neutral Since 2007</Link></li>
    </ul>
    <ul>
     <li><Link to="/privacy">Privacy</Link></li>
     <li><Link to="/terms">Terms</Link></li>
     <li><Link to="/settings">Settings</Link></li>
    </ul>
   </footer>
  </div>
 )
}

export default Footer