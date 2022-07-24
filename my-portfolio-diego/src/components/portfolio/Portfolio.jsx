import React from "react";
import "./Portfolio.css";
import STW from "../../assets/software.jpg";
import RATE from "../../assets/rate.png";
import NJN from "../../assets/ninja.jpg";
import TIC from "../../assets/tic.png";
// import STW from "../../assets/software.jpg";
// import STW from "../../assets/software.jpg";

const data = [
  {
    id: 1,
    image: RATE,
    title: "Rate-My-Cv-App",
    github: "https://github.com/DrCloudFactory454/Rate-My-Cv-App",
    demo: "https://rate-my-cv-production.herokuapp.com/",
  },

  {
    id: 2,
    image: NJN,
    title: "Boomerang Ninja Game",
    github: "https://github.com/DrCloudFactory454/Boomerang-Ninja-Game",
    demo: "https://ninja-game-454.herokuapp.com/",
  },

  {
    id: 3,
    image: TIC,
    title: "tic-tac-toe Game",
    github: "https://github.com/DrCloudFactory454/tic-tac-toe",
    demo: "https://tic-tac-toe-454.herokuapp.com/",
  },

  {
    id: 4,
    image: STW,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18861525-Lendary-Mobile",
  },
  {
    id: 5,
    image: STW,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18861525-Lendary-Mobile",
  },
  {
    id: 6,
    image: STW,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18861525-Lendary-Mobile",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, imager, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio item-image">
                <img className="ptc" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
