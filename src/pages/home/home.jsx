import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // SIDE BAR NAME
    const fullname = localStorage.getItem("fullname");
    const sidebarName = document.getElementById('sidebar-name');
    sidebarName.innerHTML = fullname;

    // LOGOUT BUTTON
    const btnLogout = document.getElementById('btn-logout');
    btnLogout.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.clear();
      window.location.href = "./login.html";
    });

    // TOGGLE BUTTON
    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      wrapper.classList.toggle('toggled');
    });

    // ADD BOOK VALIDATION
    const title = document.getElementById('input-title');
    const url = document.getElementById('input-url');
    const desc = document.getElementById('input-desc');
    const save = document.getElementById('btn-save');
    save.addEventListener('click', (e) => {
      e.preventDefault();
      if (url.value === "" || desc.value === "" || title.value === "") {
        alert("Form tidak boleh kosong");
      } else {
        alert("Sukses tambah buku");
        window.location.href = './home.html';
      }
    });

  }, []);

  return (
    <div id="wrapper">
        <div id="sidebar-wrapper" className="shadow bg-body-tertiary rounded fw-bold">
            <ul className="sidebar-nav">
                <img src="./img/dilan.png" className="rounded-circle" id="profil-picture" alt="foto-profil"/>

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
                                        {/* <a href="#" className="btn btn-default" id="menu-toggle"><i className="fa fa-bars">t</i></a> */}
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

    <div className="container card-home">
        <h4>List Book</h4><br/>
        <div className="row">
            <div className="col-md-4 mb-4">
                <a href="./detail.html" className="text-decoration-none">
                    <div className="card">
                        <img src="./img/dilan.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Dilan 1990</h5>
                            <p className="card-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <img src="./img/seni.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Buku Seni</h5>
                        <p className="card-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <img src="./img/react.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Buku React</h5>
                        <p className="card-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add Data</h1>
                    <button type="button" className="btn btn-light text-danger fw-bold" data-bs-dismiss="modal" aria-label="Close">X</button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label for="input-url" className="form-label">Url Image</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-url" placeholder="Url Image.." />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label for="input-title" className="form-label">Title</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-title" placeholder="Title..." />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label for="input-desc" className="form-label">Description</label>
                                </div>
                                <div className="col-7">
                                    <textarea className="form-control" id="input-desc" placeholder="Description..."></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-warning text-white fw-bold" id="btn-save">Save</button>
                </div>
            </div>
        </div>
    </div>

</div>
  );
};

export default Home;
