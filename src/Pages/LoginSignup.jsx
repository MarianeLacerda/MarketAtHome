import React from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Registrar</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Endereço de email" />
          <input type="password" placeholder="Senha" />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">
          {" "}
          Já possui uma conta? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Ao continuar, eu aceito os termos de política e privacidade.</p>
        </div>
      </div>
    </div>
  );
};
