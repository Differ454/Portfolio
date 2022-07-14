import React from "react";
import "./About.css";
import ME from "../../assets/software.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
             <img src={ME} alt="About Image" /> 
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 + Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            rerum voluptatibus modi similique soluta natus maiores at unde
            officia nobis eveniet sit in obcaecati cum doloremque? Eos maiores,
            neque tenetur aperiam sapiente voluptatum placeat officiis, libero
            facere dolor ad quisquam fugit assumenda laudantium deserunt
            perferendis officia sed minima repudiandae? Sunt voluptatum quisquam
            dolorem. Exercitationem, voluptatibus quae a amet quis sit.
            Consectetur, ea iusto blanditiis omnis veritatis nihil adipisci
            nulla voluptate non fugiat laborum ullam eos delectus facilis?
            Similique in, illo doloribus ab reiciendis eaque. Quam cumque
            sapiente impedit delectus nihil doloremque repellendus dolores.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
