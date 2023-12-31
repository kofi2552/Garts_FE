import React from "react";
import "./SimpleFoot.css";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FiDribbble } from "react-icons/fi";

const SimpleFoot = () => {
  return (
    <div className="footer-section">
      <div className="foot-container">
        <div className="left-list">
          <div className="social">
            <ul>
              <li className="link-item">
                <Link to="">
                  <BsFacebook />
                </Link>
              </li>
              <li className="link-item">
                <Link to="sell">
                  <AiFillInstagram size={18} />
                </Link>
              </li>
              <li className="link-item">
                <Link to="/login">
                  <FiDribbble />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="nav-ul">
              <li className="link-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link-item">
                <Link to="">Privacy</Link>
              </li>
              <li className="link-item">
                <Link to="/sell">Sell Here</Link>
              </li>
              <li className="link-item">
                <Link to="/login">Log in</Link>
              </li>
              <li className="link-item">
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-list">
          <ul className="nav-ul">
            <li className="link-item">
              <span>&copy; 2022 GetArts. All rights reserved.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimpleFoot;
