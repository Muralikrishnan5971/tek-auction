import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="loginimage"> 
      <img src={"https://d36263b6wju30t.cloudfront.net/DMS/common/loginImage.jpg"} alt="Auction" className="centre-logo" />
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={HandleSubmit}>
          <div className='icon-Tekion_Logo stylelogo'></div>
          <div className="input-group">
            <label htmlFor="email">Username*</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password*</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
