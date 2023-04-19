import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
 return (
  <nav>
   <div className="navbar-container">
    <ul className="nav-1">
     <li className="nav-item">
      <Link to="/about">About</Link>
     </li>
     <li className="nav-item">
      <Link to="/store">Store</Link>
     </li>

    </ul>

    <ul className="nav-2">
     <li className="nav-item">
      <Link to="/gmail">Gmail

      </Link>
     </li>
     <li className="nav-item">
      <Link to="/images">Images</Link>
     </li>
     <li className="nav-item">
      <Link to="/personal"><i class="fa fa-th" aria-hidden="true"></i>
      </Link>
     </li>
     <li className="nav-item">
      <Link to="/email"><img src="./images/logo.png" className="nav-img" alt="x" /></Link>
     </li>
    </ul>
   </div>
  </nav>
 )
}

export default Navbar