import React from 'react'
import Auth from '.'

const Register = ({Title}) => {
  return (
    <Auth>
      <div class="form-auth">
        <div class="box-logo"></div>
        <h3>Register Admin Area</h3>
        
        <div id="form_register" enctype="application/x-www-form-urlencoded" action="/api/register" method="post">
            <div class="mb-3">
                <label class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Input your name here"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="username@domain"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Min. 6 Character"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Min. 6 Character"/>
            </div>
            <button type="submit" class="button-login">Register</button>
            <hr/>
            <p class="text-center register">already have an account <a href="/login">Sign In</a></p>
        </div>
      </div>
    </Auth>
  )
}

export default Register
