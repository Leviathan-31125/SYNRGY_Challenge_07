import React from 'react';
import './style.css';

const Auth = (props) => {
  return (
    <div className="d-flex layout">
        <div className="cover-image">
            <img src="./images/cover.png" alt="Binar Cars"/>
        </div>
        {props.children}
    </div>
  )
}

export default Auth
