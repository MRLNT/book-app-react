import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import your custom styles here

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div id="wrapper" className={isSidebarOpen ? 'toggled' : ''}>
        {/* Sidebar */}
        <div id="sidebar-wrapper" className="shadow bg-body-tertiary rounded fw-bold">
          <ul className="sidebar-nav">
            <img src="./img/dilan.png" className="rounded-circle" id="profil-picture" alt="foto-profil" />

            <li className="sidebar-brand text-center">
              <a href="#" id="sidebar-name">Ziva Magnitudo</a>
            </li>
            <li className="sidebar-brand text-center">
              <button type="button" className="btn btn-light fw-bold" id="btn-logout"><i className="fa fa-sign-out"></i>Logout</button>
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
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleSidebar}>
                    <i className="fa fa-bars"></i>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          All Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Romantisme</a>
                          <a className="dropdown-item" href="#">Internet</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          All Time
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Tempo Dulu</a>
                          <a className="dropdown-item" href="#">Trending</a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form">
                          <i className="fa fa-search"></i>
                          <input type="text" className="form-control form-input" placeholder="Search book" />
                        </div>
                      </li>
                      <li className="nav-item px-5">
                      </li>
                      <li className="nav-item logo-library d-flex flex-row">
                        <img src="./img/bookshelf.png" alt="logo" />
                        <h4>Library</h4>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
