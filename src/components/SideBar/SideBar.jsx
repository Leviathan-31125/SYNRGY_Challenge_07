import React from 'react';
import './style.css';

const SideBar = ({activeMenu}) => {
  return (
    <div>
        <div className="d-flex flex-column fixed-top align-items-center sidebar-layout">
            <div className="d-flex justify-content-center align-items-center sidebar-layout-logo">
                <div className="sidebar-icon-logo"></div>
            </div>
            <a href="/admin">
                <div className="d-flex flex-column align-items-center justify-content-center sidebar-list-menu-layout">
                    <button className="sidebar-button-menu"><i className="fas fa-house-user" style={{color: 'white'}}></i></button>
                    <p>Dashboard</p>
                    <div className={activeMenu === 'Dashboard'? 'sidebar-active-sidebar' : 'sidebar-pasive-sidebar'}></div>
                </div>
            </a>
            <a href="/admin/cars">
                <div className="d-flex flex-column align-items-center justify-content-center sidebar-list-menu-layout">
                    <button className="sidebar-button-menu"><i className="fas fa-truck" style={{color: 'white'}}></i></button>
                    <p>Cars</p>
                    <div className={activeMenu === 'Cars'? 'sidebar-active-sidebar' : 'sidebar-pasive-sidebar'}></div>
                </div>
            </a>
        </div> 
    </div>
  )
}

export default SideBar
