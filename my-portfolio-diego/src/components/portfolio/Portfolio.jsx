import React from "react";
import "./Portfolio.css";
import STW from "../../assets/software.jpg";
// import STW from "../../assets/software.jpg";
// import STW from "../../assets/software.jpg";
// import STW from "../../assets/software.jpg";
// import STW from "../../assets/software.jpg";
// import STW from "../../assets/software.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio item-image">
          <img className="ptc" src={STW} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="http://github.com" className="btn">
          Github
        </a>
        <a
          href="https://dribbble.com/shots/18859381-DJ-Dog-Basket-NFT"
          className="btn btn-primary"
          target="_blank"
        >
          Live Demo
        </a>
      </article>
      

      <article className="portfolio__item">
        <div className="portfolio item-image">
          <img className="ptc" src={STW} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="http://github.com" className="btn">
          Github
        </a>
        <a
          href="https://dribbble.com/shots/18859381-DJ-Dog-Basket-NFT"
          className="btn btn-primary"
          target="_blank"
        >
          Live Demo
        </a>
      </article>
      

      <article className="portfolio__item">
        <div className="portfolio item-image">
          <img className="ptc" src={STW} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="http://github.com" className="btn">
          Github
        </a>
        <a
          href="https://dribbble.com/shots/18859381-DJ-Dog-Basket-NFT"
          className="btn btn-primary"
          target="_blank"
        >
          Live Demo
        </a>
      </article>

      <article className="portfolio__item">
        <div className="portfolio item-image">
          <img className="ptc" src={STW} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="http://github.com" className="btn">
          Github
        </a>
        <a
          href="https://dribbble.com/shots/18859381-DJ-Dog-Basket-NFT"
          className="btn btn-primary"
          target="_blank"
        >
          Live Demo
        </a>
      </article>

      <article className="portfolio__item">
        <div className="portfolio item-image">
          <img className="ptc" src={STW} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="http://github.com" className="btn">
          Github
        </a>
        <a
          href="https://dribbble.com/shots/18859381-DJ-Dog-Basket-NFT"
          className="btn btn-primary"
          target="_blank"
        >
          Live Demo
        </a>
      </article>

      <article className="portfolio__item">
        <div className="portfolio item-image">
          <img className="ptc" src={STW} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="http://github.com" className="btn">
          Github
        </a>
        <a
          href="https://dribbble.com/shots/18859381-DJ-Dog-Basket-NFT"
          className="btn btn-primary"
          target="_blank"
        >
          Live Demo
        </a>
      </article>
      </div>
    </section>
  );
};

export default Portfolio;
