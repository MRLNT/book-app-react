import React, { useState } from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    

      console.log(email);
      console.log(password);

      if (email === '') {
        alert('Email cannot be empty');
      } else if (password === '') {
        alert('Password cannot be empty');
      } else {

      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      if (email === storedEmail && password === storedPassword) {
        alert('Success login');

        navigate('./');
      } else {
        alert('Incorrect email or password');
      }
      
       };
  };

  return (
    <div className="row" style={{ height: '100vh' }}>
      <div
        className="col-7"
        style={{
          backgroundImage: `url('./img/cover-register.png')`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white p-5">Buku adalah jendela dunia</h1>
      </div>

      <div className="col-5">
        <div className="container-fluid py-5 d-flex flex-column justify-content-between h-100">
          <div className="position-absolute top-0 end-0 p-5">
            <img src="./img/bookshelf.png" alt="logo" />
          </div>
          <br />
          <div className="align-items-center justify-content-center pt-5 container">
            <h1 className="fw-bold">Login</h1>
            <p>Welcome Back, Please Login to your account</p>

            <div className="form-field">
              <label className="form-field-label">Email Address</label>
              <input
                type="email"
                className="form-field-input"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-field-label">Password</label>
              <input
                type="password"
                className="form-field-input"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="container text-center">
              <div className="row justify-content-md-center">
                <div className="col col-lg-6">
                  <div className="checkbox float-start">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                </div>
                <div className="col col-lg-6">
                  <a href="#" className="float-end">
                    Forgot Password
                  </a>
                </div>
              </div>
            </div>
            <br />
            <button className="btn btn-dark px-4" type="button" onClick={handleLogin}>
              Login
            </button>
            <Link to="/register" className="btn btn-light px-4">
              Sign up
            </Link>
            
            

          </div>

          <h6 className="text-black my-5">
            By signing up, you agree to Book's
            <br />
            <a href="#">Terms and Conditions</a> & <a href="#">Privacy Policy</a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
