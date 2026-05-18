import React from "react";
import "./Banner.scss";
import bannerBg from "../../assets/Rectangle 250.svg";

const Banner: React.FC = () => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerBg})` }}
      aria-label="Promoção Black Friday - 50% Off nos produtos"
    >
      <div className="banner__overlay" />
      <div className="banner__content">
        <h1 className="banner__title">
          Venha conhecer nossas <br /> promoções
        </h1>
        <p className="banner__subtitle">
          <strong className="banner__highlight">50% Off</strong> nos produtos
        </p>
        <a
          href="https://www.econverse.com.br/"
          target="_blank"
          className="banner__cta"
          role="button"
        >
          Ver produto
        </a>
      </div>
    </section>
  );
};

export default Banner;
