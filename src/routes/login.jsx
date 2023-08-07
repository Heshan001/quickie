import React from 'react'
import "../styles/login.css"

function login() {
  return (
    <div className='cover'>
        <h1>Login</h1>
        
        <input className='uname' type="text" placeholder='username' />
        
        <input className='pwd' type="password" placeholder='password' />
                
                <div id='forget'>
                    Forget you'r password?
                </div>
                <div className='button'>
                    <button className='btn'>Sign in</button>

                </div>
    </div>
  )
}

export default login