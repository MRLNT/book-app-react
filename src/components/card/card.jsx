import React from 'react'

const Card = () => {
  return (
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
        </div>
    </div>
  )
}

export default Card