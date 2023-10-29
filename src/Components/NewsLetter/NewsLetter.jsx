import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Tenha ofertas exclusivas no seu email</h1>
      <p>Se inscreva no nosso newsletter e receba promoções</p>
      <div>
        <input type="email" placeholder="Seu endereço de email" />
        <button>Inscreva-se</button>
      </div>
    </div>
  );
};
