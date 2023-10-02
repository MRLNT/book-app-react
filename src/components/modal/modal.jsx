import React, { useState } from 'react';
import { addBooks } from '../../services/book';

const Modal = () => {
    const [judul, setJudul] = useState('');
    const [tahunTerbit, setTahunTerbit] = useState('');
    const [namaPengarang, setNamaPengarang] = useState('');
    const [namaPenerbit, setNamaPenerbit] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSaveClick = async () => {
        try {
            if (judul === "" || tahunTerbit === "" || namaPengarang === "" || namaPenerbit === "") {
                alert("Form cannot be empty");
                return;
            }

            // const data = {
            //     title: judul,
            //     year: tahunTerbit,
            //     author: {
            //         name: namaPengarang,
            //     },
            //     publisher: {
            //         name: namaPenerbit,
            //     },
            // };
            // DENGAN CATATAN HARUS SAMA DENGAN DATA DI BACK END
            const data = {
                judul,
                tahunTerbit,
                namaPengarang,
                namaPenerbit,
                
            };
            console.log(data);

            const response = await addBooks(data);

            if (response.status === 201) {
                setSuccessMessage("Book added successfully");
                setJudul('');
                setTahunTerbit('');
                setNamaPengarang('');
                setNamaPenerbit('');
            } else {
                alert("Failed to add book");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Data</h1>
                        <button type="button" className="btn btn-light text-danger fw-bold" data-bs-dismiss="modal" aria-label="Close" id='x-btn'>X</button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="input-judul" className="form-label">Judul</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-judul" name="judul" value={judul} onChange={(e) => setJudul(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="input-tahun" className="form-label">Tahun Terbit</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-tahun" name="tahunTerbit" value={tahunTerbit} onChange={(e) => setTahunTerbit(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="input-pengarang" className="form-label">Nama Pengarang</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-pengarang" name="namaPengarang" value={namaPengarang} onChange={(e) => setNamaPengarang(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="input-penerbit" className="form-label">Nama Penerbit</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-penerbit" name="namaPenerbit" value={namaPenerbit} onChange={(e) => setNamaPenerbit(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning text-white fw-bold" id="btn-save" onClick={handleSaveClick}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
