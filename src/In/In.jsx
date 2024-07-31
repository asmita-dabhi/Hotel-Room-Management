import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./In.css";

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signUp = (event) => {
    event.preventDefault();

    if (!email.includes('@')) {
      alert("Please enter a valid email address.");
      return;
    }

    let logins = JSON.parse(localStorage.getItem('logins')) || [];

    const existingUser = logins.find(login => login.email === email);
    if (existingUser) {
      alert("This email is already registered.");
      return;
    }

    logins.push({ username, email, password });

    localStorage.setItem('logins', JSON.stringify(logins));

    alert("Sign-Up successfully!");

    history.push('/');
  };

  return (
    <div className="signup-container">
      <header className="showcase">
        <div className="showcase-content">
          <div className="showcase-top">
            <h1>SIGN UP</h1>
          </div>
          <div className="formm">
            <form onSubmit={signUp}>
              <h2>Create your account</h2>
              <div className="info">
                <input
                  className="email"
                  type="text"
                  placeholder="Username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
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
                  Sign Up
                </button>
              </div>
              <div className="signin">
                <p>Already have an account?</p>
                <a href="home">Login now</a>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default SignUp;
