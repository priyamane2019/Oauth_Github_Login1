import React from 'react'
import "../index.css"
import { useAuth0 } from '@auth0/auth0-react';
import {BsGithub } from "react-icons/bs";

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();

  return <>
  <div className="container">
    <div className="content">
    <strong> <BsGithub size={50}/>GitHub SignIn</strong><br />
      <h1>Hey there</h1>
      <h5>We're going to sign in with the GitHub OAuth API. Ready?</h5>
     
       <button className= "LoginBtn" onClick={() => loginWithRedirect()}>Log In </button>
    </div>
  </div>
     
  </>
  
}

export default LoginPage