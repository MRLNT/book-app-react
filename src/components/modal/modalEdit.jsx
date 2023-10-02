import React, { useState } from 'react';
import { addBooks } from '../../services/book';

const ModalEdit = () => {
    

    return (
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
    );
}

export default ModalEdit;
