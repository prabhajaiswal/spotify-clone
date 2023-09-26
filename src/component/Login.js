import React from 'react'
import spotify from './spotify.jpg' 
import { loginUrl } from './Spotify'
function Login() {
  return (
    <div>
      <div className="login">

        <img  src={spotify} alt="no image" />
      </div>
      <a href={loginUrl}> Login</a>
    </div>
  )
}

export default Login;
