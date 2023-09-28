import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    useEffect(() => {
        // SIDE BAR NAME
        const fullname = localStorage.getItem("fullname");
        const sidebarName = document.getElementById('sidebar-name');
        sidebarName.innerHTML = fullname;
        
    }, []);
  return (
    <div id="sidebar-wrapper" className="shadow bg-body-tertiary rounded fw-bold">
        <ul className="sidebar-nav">
            <img src="./img/dilan.png" className="rounded-circle" id="profil-picture" alt="foto-profil"/>

            <li className="sidebar-brand text-center">
                <a href="#" id="sidebar-name">Ziva Magnitudo</a>
            </li>
            <li className="sidebar-brand text-center">
                <Link to="/login" className="btn btn-light fw-bold btn-login">
                    <i className="fa fa-sign-out"></i> Logout
                </Link>
            </li>
            <li className="sidebar-brand">
                <a href="#">Explore</a>
            </li>
            <li className="sidebar-brand">
                <a href="#">History</a>
            </li>
            <li className="sidebar-brand">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Book*</a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar