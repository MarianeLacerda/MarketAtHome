import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>OFERTAS</h1>
        <h1>Exclusivas</h1>
        <p>APENAS OS MELHORES PRODUTOS</p>
        <button>Aproveite agora</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
