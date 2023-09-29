import React from 'react'
import { getBooks } from '../../services/book';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            const response = await getBooks();
            console.log(response.data.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);
  return (
    <div className="container card-home">
        <h4>List Book</h4><br/>
        <div className="row">
            {data && data.data.map((book, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <a href="./detail.html" className="text-decoration-none">
                        <div className="card">
                            {/* <img src={`./img/${book.image}`} className="card-img-top" alt={book.title}/> */}
                            <img src="./img/dilan.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">{book.title}</h5>
                                <h5 className="card-title text-center">{book.year}</h5>
                                {/* <h5 className="card-title text-center">{book.author.name}</h5>
                                <h5 className="card-title text-center">{book.publisher.name}</h5> */}
                                <div className="action d-flex justify-content-between">
                                    <Link to={`/books/${book.id}`}>See Detail</Link>
                                    <Link to={`/books/${book.id}`}>Update Data</Link>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Card