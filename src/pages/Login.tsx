import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoraLogoIcon from '../icons/CoraLogoIcon';
import CircleIcon from '../icons/CircleIcon';
import FatCircleIcon from '../icons/FatCircleIcon';
import RedHeartIcon from '../icons/RedHeartIcon';
import CircleGreenHeartIcon from '../icons/CircleGreenHeartIcon';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    navigate('/contents');
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="background-elements">
        <FatCircleIcon className="bg-circle top-left" color="#7ABBD7" width="40rem" height="40rem" />
        <CircleIcon className="bg-circle top-right" color="#FDC647" width="30rem" height="30rem" />
        <RedHeartIcon className="bg-heart red-heart bottom-left" color="#DF3841" width="35rem" height="35rem" />
        <CircleGreenHeartIcon className="bg-circle bottom-right" color="#61BC55" width="35rem" height="35rem" />
      </div>

      <div className="login-content">
        <div className="logo-section">
          <div className="logo">
            <CoraLogoIcon width="30rem" height="30rem" className="desktop-logo" />
            <CoraLogoIcon width="20rem" height="20rem" className="mobile-logo" />
          </div>
        </div>

        <div className="form-section">
          <h1>Seja bem-vindo!</h1>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="input-field"
                autoFocus
              />
            </div>

            <div className="form-group">
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  className="input-field"
                />
                <button 
                  type="button" 
                  className="eye-button"
                  onClick={togglePassword}
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem">
                    <path d="M12 5.25C7.5 5.25 3.75 8.25 2.25 12C3.75 15.75 7.5 18.75 12 18.75C16.5 18.75 20.25 15.75 21.75 12C20.25 8.25 16.5 5.25 12 5.25Z" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberPassword"
                  checked={rememberPassword}
                  onChange={(e) => setRememberPassword(e.target.checked)}
                />
                <label htmlFor="rememberPassword">Lembrar senha</label>
              </div>
              <a href="#" className="forgot-password">Esqueci minha senha</a>
            </div>

            <button type="submit" className="login-button">
              Entrar
            </button>

            <div className="register-option">
              <p>Não tem uma conta? <a href="/registration">Cadastre-se</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
