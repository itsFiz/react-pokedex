import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/fiz.jpg";
import { FaYoutube, FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I'm Fiz</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      
      <div className="profile-links">
        <a href="https://github.com/itsfiz">
          <FaGithub />
        </a>
        <a href="https://twitter.com/criedfizcken">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/hfzkdr/">
          <FaLinkedin />
        </a>
        <a href="https://discord.gg/8W9JWf5xpB">
          <FaDiscord />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
