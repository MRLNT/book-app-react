import React, { useEffect } from 'react';

const Modal = () => {
    useEffect(() => {

    // // ADD BOOK VALIDATION
    // const title = document.getElementById('input-title');
    // const url = document.getElementById('input-url');
    // const desc = document.getElementById('input-desc');
    // const save = document.getElementById('btn-save');
    // save.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (url.value === "" || desc.value === "" || title.value === "") {
    //     alert("Form tidak boleh kosong");
    //     } else {
    //     alert("Sukses tambah buku");
    //     window.location.href = './home.html';
    //     }
    // });

    }, []);
  return (
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
  )
}

export default Modal