import React from "react";
import "./Footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">
          PALASH
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#expierence">Expierence</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com">
            <AiOutlineFacebook />
          </a>
          <a href="https://www.instagram.com/palash_wani_1613/">
            <FiInstagram />
          </a>
          <a href="https://twitter.com">
            <FiTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Palash Wani. All rights reserved </small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
