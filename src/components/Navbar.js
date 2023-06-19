import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
const { logout } = useAuth0();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">SignIn</NavLink>
        </li>
        
        <li>
          <button className='logoutbtn' onClick={()=> logout({ returnTo: window.location.origin})}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
