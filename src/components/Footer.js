import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { RiPassportFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons d-flex justify-content-evenly pt-3">
        '
        <IconContext.Provider
          value={{
            color: "white",
            className: "global-class-name",
            size: "4em",
          }}
        >
          <a
            href="https://linkedin.com/in/samaresh-das-ab9621212"
            target="blank"
            className="footer-linkedin"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Samaresh-Das"
            target="blank"
            className="footer-github"
          >
            <BsGithub />
          </a>
          <a
            href="https://samaresh-portfolio.netlify.app/"
            target="blank"
            className="footer-portfolio"
          >
            <RiPassportFill />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
