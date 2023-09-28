import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
    // TOGGLE BUTTON
    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.toggle('toggled');
    });

    }, []);
  return (
    <div id="page-content-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    {/* <a href="#" className="btn btn-default" id="menu-toggle"><i className="fa fa-bars">r</i></a> */}
                                    <a href="#" className="btn btn-default" id="menu-toggle">MENU</a>
                                </li>
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
                                        <input type="text" className="form-control form-input" placeholder="Search book"/>
                                    </div>
                                </li>
                                <li className="nav-item px-5">
                                </li>
                                <li className="nav-item logo-library d-flex flex-row">
                                    <img src="./img/bookshelf.png" alt="logo"/>
                                    <h4>Library</h4>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="./img/dilan.png" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                            <div className="container">
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="./img/lembur.png" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                            <div className="container">
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="./img/laskar.png" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                            <div className="container">
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Navbar