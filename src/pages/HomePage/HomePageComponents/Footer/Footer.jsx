import React from "react";
import "../../../../Colours/colours.css";
import "../Footer/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="main-footer">
        <div className="footer-text">Design By Kotesh Mudila</div>
        <div className="footer-icons">
          <a className="footer-icon-link" href="https://github.com/kotesh-arya">
            <FaGithub className="main-footer-icon" />
          </a>
          <a
            className="footer-icon-link"
            href="https://twitter.com/Codesh_"
          >
            <FaTwitter className="main-footer-icon" />
          </a>
          <a
            className="footer-icon-link"
            href="https://www.linkedin.com/in/koteswara-rao-mudila-7aa740159/"
          >
            <FaLinkedin className="main-footer-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export { Footer };
