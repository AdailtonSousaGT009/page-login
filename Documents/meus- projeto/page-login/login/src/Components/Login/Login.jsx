import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom"; // ✅ Importando Link
import "./Login.css";

const Login = ({
  title = "Bem-vindo(a), cliente!",
  buttonText = "INICIAR SESSÃO",
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-right">
          <div className="top-bar">
            <div className="logo">TECSUPPORT</div>
            <div className="buttons">
              <button className="home-btn">Home</button>
              <span className="dark-toggle" onClick={toggleDarkMode}>
                {darkMode ? <BsSun /> : <BsMoonStars />}
              </span>
            </div>
          </div>

          <h1 className="welcome">{title}</h1>

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
                placeholder="password_here"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>

            <div className="recall-forget">
              <label>
                <input type="checkbox" />
                Lembre de mim
              </label>
              <Link to="/forgot-password">Esqueceu sua senha?</Link>{" "}
              {/* ✅ Atualizado */}
            </div>

            <button type="submit" className="login-btn">
              {buttonText}
            </button>

            <div className="signup-link">
              <p>
                Não tem uma conta? <Link to="/register">Registrar</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
