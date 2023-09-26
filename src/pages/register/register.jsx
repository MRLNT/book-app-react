import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (password === '') {
      alert('Password cannot be empty');
    } else if (email === '') {
      alert('Email cannot be empty');
    } else if (username === '') {
      alert('Username cannot be empty');
    } else if (fullname === '') {
      alert('Full Name cannot be empty');
    } else {
      alert('Success register');
      localStorage.setItem('username', username);
      localStorage.setItem('fullname', fullname);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      window.location.href = './login.html';
    }
  };

  return (
    <div className="row">
      <div
        className="col-7"
        style={{
          backgroundImage: `url('./img/cover-register.png')`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <h1 className="text-white p-5">Buku adalah jendela dunia</h1>
      </div>
      <div className="col-5">
        <div className="container-fluid py-5">
          <div className="position-absolute top-0 end-0 p-5">
            <img src="./img/bookshelf.png" alt="logo" />
          </div>
          <br />
          <h1 className="display-5 fw-bold">Register</h1>
          <p>Welcome Back, Please Register to create an account</p>
          <div className="form-field">
            <label className="form-field-label">Username</label>
            <input
              type="text"
              className="form-field-input"
              placeholder="Masukkan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-field-label">Full Name</label>
            <input
              type="text"
              className="form-field-input"
              placeholder="Masukkan Nama Lengkap"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
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
          <br />
          <div>
            <button className="btn btn-dark px-4" type="button" onClick={handleRegister}>
              Sign up
            </button>
            <Link to="/login" className="btn btn-light px-4">
              Login
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

export default Register;
