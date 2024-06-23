import React from 'react';
import './style.css';

const Navbar = ({titleMenu, listMenu}) => {
  return (
    <header>
        <nav className="navbar fixed-top navbar-light shadow-sm">
            <div className="container-fluid">
                <div className="d-flex align-items-center navbar-icon-logo">
                    <div className="navbar-box-logo"></div>
                    <button className="btn navbar-toggler-icon"></button>
                </div>
                <div className="d-flex gap-2">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn navbar-search-button" type="submit">Search</button>
                    </form>
                    <div className="d-flex gap-2 align-items-center">
                        <div className='navbar-avatar'>
                            <img src="/images/anonym_avatar.png" alt="BCR Avatar"/>
                        </div>
                        <p id="email_user" className='navbar-mail-template'></p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </div>
                </div>
            </div>
        </nav>
        <div className="fixed-top navbar-menu-layout">
            <h3 className='navbar-menu-title'>{titleMenu}</h3>
            <div className='navbar-breadcrumb'>
                {
                    listMenu.map((menu, index) => ( <p key={index}>{menu}</p> ) )
                }
                
            </div>
        </div>
    </header>
  )
}

export default Navbar
