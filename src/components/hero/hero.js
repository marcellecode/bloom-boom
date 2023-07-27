import React from "react";
import "./hero.scss";
import flowers from "../../images/flowers.jpg";

function Hero() {
  return (
    <div id="hero">
      <div className="hero-content">
        <span className="hero-content__text">
          Your <p>Bloom & Boom</p> destination for exquisite floral delights
          <button className="order-now">Order now</button>
        </span>
      </div>

      <img className="hero-image" src={flowers} />
    </div>
  );
}

export default Hero;
