import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CSS/Login.css';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000//api/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name}),
      });
      if (response.ok) {
        history.push('/'); 
      } else {
        setError('Mot de passe ou email incorrect');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setError('Une erreur s\'est produite lors de la connexion');
    }
  };

  return (
    <div className='login'>
      <div className="logincontainer">
        <h1>Se connecter</h1>
        <div className="loginfields">
          <input type="email" placeholder='votrenom@random.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="name" placeholder='votrenom' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Continuer</button>
        </div>
        {error && <p className="error">{error}</p>}
        <div className='loginagree'>
          <input type="checkbox" name='' id='' />
          <p>En continuant, j'accepte les termes et conditions</p>
        </div>
      </div>
    </div>
  );
};