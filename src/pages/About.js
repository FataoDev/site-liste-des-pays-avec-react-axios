import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import "../styles/components/about.css";
const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <p className="about">
        <p>
          {" "}
          Nom : <span>OUEDRAOGO</span>{" "}
        </p>
        <br />
        <p>
          Prenom: <span>Fatao</span>{" "}
        </p>
        <br />
        <p>
          Email :
          <span>
            {" "}
            <a href="mailto:fataoouedraogo226@gmail.com">
              fataoouedraogo226@gmail.com
            </a>{" "}
          </span>
        </p>
        <br />
        <p>
          Portfolio:{" "}
          <span>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://portfolio-fatao.web.app"
            >
              https://portfolio-fatao.web.app
            </a>{" "}
          </span>
        </p>
      </p>
    </div>
  );
};

export default About;
