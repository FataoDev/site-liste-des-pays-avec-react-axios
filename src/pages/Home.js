import React from "react";
import Navigation from "../components/Navigation";
import "../styles/components/home.css";
// import Logo from "../components/Logo";
// import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      {/* <Logo /> */}
      <Navigation />
      {/* <Countries /> */}
      <div className="home">
        <img src="./photo.jpg" alt="" />
        <h2>Fatao OUEDRAOGO</h2>
        <h3>Développeur Web Front-End</h3>
      </div>
    </div>
  );
};

export default Home;
