import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './CreateAccount.css'

const CreateAccountForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/congrats');
  };

  return (
    <form onSubmit={handleSubmit}>  
      <label>
        Name:
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div className="button-container">
        <button type="submit">Submit</button>
        <button type="button">
          <Link to="/">Cancel</Link>
        </button>
      </div>  
    </form>
  );
};

export default CreateAccountForm;