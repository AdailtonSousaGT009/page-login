import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Login/Login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registro enviado:", { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-right">
          <div className="top-bar">
            <div className="logo">TECSUPPORT</div>
          </div>

          <h1 className="welcome">Criar conta</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                placeholder="email@example.com"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser className="icon" />
            </div>

            <div className="input-field password-wrapper">
              <input
                type="password"
                placeholder="Escolha uma senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>

            <button type="submit" className="login-btn">
              REGISTRAR
            </button>

            <div className="signup-link">
              <p>
                Já tem uma conta? <Link to="/">Iniciar sessão</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
