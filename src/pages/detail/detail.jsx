import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <div>
        <div>
        <img
            src="./img/covernya.png"
            className="img-fluid"
            alt="Responsive image"
            style={{
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                width: "400vh"
            }}
        />


        </div>

        <div className="position-absolute top-0 start-0 p-5">
        <Link to="/home" className="text-decoration-none text-black">
            <button type="button" className="btn btn-light btn-lg">
                <i className="fa fa-arrow-left"></i>
            </button>
        </Link>
        </div>

        <div className="position-absolute top-0 end-0 p-5">
            <a href="#" className="text-white fw-bold text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
            <a href="#" className="text-white fw-bold text-decoration-none" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</a>
        </div>

        <div className="container">
            <div className="row mt-2">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-8">
                            <h3><span className="badge text-bg-warning text-white rounded-pill">Novel</span></h3>
                            <h1 className="fw-bold">DILANDA 1990</h1>
                            <h4>30 Juni 2019</h4>
                        </div>
                        <div className="col-4 text-success fw-bold p-5">
                            Available
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <img src="./img/booknya.png" alt="bukunya" style={{ marginTop: '-30vh' }} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="row">
                    <div className="col-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam ex labore doloremque eum sint est repellendus iure provident, id quidem itaque minima, dolores incidunt enim numquam atque minus cum, architecto cupiditate deserunt? Saepe totam dolorum pariatur optio, praesentium adipisci expedita recusandae aut culpa necessitatibus dolore enim eveniet placeat labore temporibus iste fugit atque fugiat autem quaerat animi cupiditate, officiis aperiam maiores! Fuga voluptate distinctio minus, suscipit tempora deserunt doloremque quaerat vitae eum pariatur facere harum eligendi? Impedit possimus cupiditate dolor perferendis et quidem doloribus mollitia molestiae animi esse quia doloremque laborum deleniti nam porro, eveniet expedita molestias reiciendis voluptatem.</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2 pt-5 mt-5">
                        <button type="button" className="btn btn-warning text-white fw-bold btn-lg px-5">Borrow</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Data</h1>
                        <button type="button" className="btn btn-light text-danger fw-bold" data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="input-url" className="form-label">Url Image</label>
                                    </div>
                                    <div className="col-7">
                                        <input type="text" className="form-control" id="input-url" placeholder="http://gambar.com.com/dilanda.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="input-title" className="form-label">Title</label>
                                    </div>
                                    <div className="col-7">
                                        <input type="text" className="form-control" id="input-title" placeholder="DILANDA 1990"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="input-desc" className="form-label">Description</label>
                                    </div>
                                    <div className="col-7">
                                        <textarea className="form-control" id="input-desc" placeholder="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning text-white fw-bold">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteModalLabel"></h1>
                        <button type="button" className="btn btn-light text-danger fw-bold" data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div className="modal-body text-center">
                        <i className="fa fa-check-circle-o fa-5x text-success"></i>
                        <h3>Data <b>Dilan 1990</b> berhasil dihapus !</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Detail;
