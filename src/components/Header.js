import React from 'react'
import "./Header.css"
import Navbar from './Navbar'
const Header = () => {
  return <>
    <div className="heading">
    <img className="logo1" src="./images/logo1.png" alt="logo" />
    <img className="logo1" src="./images/logo2.png" alt="logo" />
    <Navbar />
    </div>

    
  </>
}

export default Header