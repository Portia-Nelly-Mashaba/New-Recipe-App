// Login.js
import React, { useState } from 'react';
import { FaAppleAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // Handle login function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Fetch the users data from db.json
      const response = await fetch('http://localhost:8000/users');
      const users = await response.json();

      // Check if there’s a match for email and password
      const user = users.find(user => user.email === email && user.password === password);
      
      if (user) {
        setMessage('Login successful!');
        navigate('/')
      } else {
        setMessage('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
      <div className="container py-5 vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                
                {/* Image section */}
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.pexels.com/photos/10254480/pexels-photo-10254480.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                
                {/* Form section */}
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleLogin}>
                      {/* Logo and Title */}
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <FaAppleAlt className="me-3" style={{ color: '#9A616D', fontSize: '2rem' }} />
                        <span className="h1 fw-bold mb-0">Mzansi Flava App</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                      
                      {/* Email Input */}
                      <div className="form-outline mb-4">
                        <input 
                          type="email" 
                          id="form2Example17" 
                          className="form-control form-control-lg" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                      </div>

                      {/* Password Input */}
                      <div className="form-outline mb-4">
                        <input 
                          type="password" 
                          id="form2Example27" 
                          className="form-control form-control-lg" 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                      </div>

                      {/* Login Button */}
                      <div className="pt-1 mb-4">
                        <button 
                          className="btn btn-block" 
                          style={{ backgroundColor: '#9A616D', color: 'white' }} 
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      {/* Display Success/Error Message */}
                      {message && <p className="text-center" style={{ color: '#9A616D' }}>{message}</p>}

                      {/* Links */}
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Don't have an account? <a href="/register" style={{ color: '#393f81' }}>Register here</a>
                      </p>
                      <a href="#!" className="small text-muted">Terms of use.</a>
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
