import React, { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBooksById, updateBook } from '../../services/book';
import { useEffect } from 'react';

const Detail = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();
    var judulBawaan;

    const getDataById = useCallback(async () => {
        try {
            const response = await getBooksById(id);
            localStorage.setItem("idNya", id);
            const idnya = localStorage.getItem("idNya");

            const dataNya = [];
            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i].id == idnya) {
                    dataNya.push(response.data.data[i]);
                }
            }
            setData(dataNya);
            judulBawaan = dataNya[0].title;
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        getDataById();
    }, [getDataById]);

    
    const [judul, setJudul] = useState('');
    const [tahunTerbit, setTahunTerbit] = useState('');
    const [namaPengarang, setNamaPengarang] = useState('');
    const [namaPenerbit, setNamaPenerbit] = useState('');
    

    const handleSaveClick = async () => {
        try {
            console.log(judul);
            console.log(tahunTerbit);
            console.log(namaPengarang);
            console.log(namaPenerbit);
            if (judul === "" || tahunTerbit === "" || namaPengarang === "" || namaPenerbit === "") {
                alert("Form cannot be empty");
                return;
            }
            const data = {
                judul,
                tahunTerbit,
                namaPengarang,
                namaPenerbit,
            };
            console.log(data);

            const response = await updateBook(id, data);
            console.log(response);

            if (response.status === 200) {
                alert("Book updated successfully");
                setJudul('');
                setTahunTerbit('');
                setNamaPengarang('');
                setNamaPenerbit('');
            } else {
                alert("Failed to update book");
            }
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div>
        <div>
        <img
            src="../img/covernya.png"
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
        <Link to="/" className="text-decoration-none text-black">
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
                            <h1 className="fw-bold">{data ? data[0].title : ''}</h1>
                            <h4>{data ? data[0].year : ''}</h4>
                        </div>
                        <div className="col-4 text-success fw-bold p-5">
                            Available
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <img src="../img/booknya.png" alt="bukunya" style={{ marginTop: '-30vh' }} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="row">
                    <div className="col-8">
                        <p>Pengarang : {data ? data[0].author.name : ''}</p>
                        <p>Penerbit : {data ? data[0].publisher.name : ''}</p>
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
                                    <label htmlFor="input-judul" className="form-label">Judul</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-judul" name="judul" placeholder={data ? data[0].title : ''} value={judul} onChange={(e) => setJudul(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="input-tahun" className="form-label">Tahun Terbit</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-tahun" name="tahunTerbit" placeholder={data ? data[0].year : ''} value={tahunTerbit} onChange={(e) => setTahunTerbit(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="input-pengarang" className="form-label">Nama Pengarang</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-pengarang" placeholder={data ? data[0].author.name : ''} name="namaPengarang" value={namaPengarang} onChange={(e) => setNamaPengarang(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="input-penerbit" className="form-label">Nama Penerbit</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control" id="input-penerbit" placeholder={data ? data[0].publisher.name : ''} name="namaPenerbit" value={namaPenerbit} onChange={(e) => setNamaPenerbit(e.target.value)} />
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
