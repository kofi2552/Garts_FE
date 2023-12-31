import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

import logoclong from "../../assets/logo3_clong.png";

const Nav2Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="nav-home-2">
      <div className="nav-bar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logoclong} alt="" width="60%" />
          </Link>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <NavLink to="/sell">Sell Here</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li>
              <NavLink className="signup-btn" to="/signup">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-icon">
          {toggleMenu ? (
            <RiCloseLine
              color={"#3e8588"}
              size={30}
              className="close-menu-icon"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <AiOutlineMenu
              className="menu-open"
              size={25}
              color={"#3e8588"}
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>
      {toggleMenu ? (
        <div className="mobile-nav-menu">
          <ul>
            <li>
              <NavLink to="/sell">Sell Here</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink className="login-btn" to="/login">
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink className="signup-btn" to="/signup">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Nav2Home;
