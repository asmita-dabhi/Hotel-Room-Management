import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = (event) => {
    event.preventDefault();

    if (!email.includes('@')) {
      alert("Please enter a valid email address.");
      return;
    }

    let logins = JSON.parse(localStorage.getItem('logins')) || [];

    logins.push({ email, password });

    localStorage.setItem('logins', JSON.stringify(logins));

    console.log("Stored Logins:", JSON.parse(localStorage.getItem('logins')));

    alert("Login successfully!");

    history.push('/');
  };

  return (
    <div className="login-container">
      <header className="showcase">
        <div className="showcase-content">
          <div className="showcase-top">
            <h1>LOGIN</h1>
          </div>
          <div className="formm">
            <form onSubmit={signIn}>
              <h2>Welcome user!</h2>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  className="email"
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit">
                  Login
                </button>
              </div>
              <div className="help">
                <div>
                  <input defaultValue="true" type="checkbox" />
                  <label>Remember me</label>
                </div>
              </div>
              <div className="signup">
                <p>New to User?</p>
                <a href="signup">Sign up now</a>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;



