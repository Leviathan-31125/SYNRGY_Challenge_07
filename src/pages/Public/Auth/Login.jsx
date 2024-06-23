import React from 'react';
import Auth from '.';

const Login = () => {
  return (
    <Auth>
        <div className="form-auth">
            <div className="box-logo"></div>
            <h3>Welcome, Admin BCR</h3>
            <div enctype="application/x-www-form-urlencoded">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Contoh: johndee@gmail.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Min. 6 Character"/>
                </div>
                <a href="/admin"><button type="submit" className="button-login">Sign In</button></a>
                <hr/>
                <p className="text-center register">Don't have account yet? <a href="/register">Register</a></p>
            </div>
        </div>
    </Auth>
  )
}

export default Login
