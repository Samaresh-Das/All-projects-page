import React, { Fragment } from "react";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="text-bg-dark py-2">
        <ul className="nav justify-content-center">
          <li className="nav-item pt-2 mx-2">
            <IconContext.Provider
              value={{ color: "white", className: "global-class-name" }}
            >
              <div className="git px-3 py-2">
                <a href="https://github.com/Samaresh-Das" target="blank">
                  <FiGithub />
                </a>
              </div>
            </IconContext.Provider>
          </li>
          <li className="nav-item pt-3 mx-4">Samaresh Das</li>
          <li className="nav-item pt-2 mx-4">
            <IconContext.Provider
              value={{ color: "white", className: "global-class-name" }}
            >
              <div className="linkedin px-3 py-2">
                <a
                  href="https://linkedin.com/in/samaresh-das-ab9621212"
                  target="blank"
                >
                  <BsLinkedin />
                </a>
              </div>
            </IconContext.Provider>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
