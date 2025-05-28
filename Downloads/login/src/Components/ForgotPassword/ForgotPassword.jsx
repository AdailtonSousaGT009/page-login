import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Solicitação de recuperação para:", email);
    alert(
      "Se o e-mail existir, você receberá instruções para redefinir sua senha."
    );
    setEmail("");
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Recuperar Senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="email"
              placeholder="email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </div>
          <button type="submit" className="submit-btn">
            Enviar instruções
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
