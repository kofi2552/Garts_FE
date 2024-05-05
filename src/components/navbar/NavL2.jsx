import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
const NavL2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <div className="home-2">
        <div className="top-nav">
          <div className="top-nav-logo">
            <h3>
              <Link to="/">
                <strong>GetArt</strong>
              </Link>
            </h3>
          </div>
          <div className="nav-content">
            <ul>
              <li>
                <NavLink to="about-us">About us</NavLink>
              </li>
              <li>
                <NavLink to="join-us">Our Community</NavLink>
              </li>
              <li>
                <NavLink to="legal/partner-us">Partner with us</NavLink>
              </li>
              <li>
                <NavLink to="blog">Blog</NavLink>
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
          <div className="co-mobile-nav-menu">
            <ul>
              <li>
                <NavLink to="about-us">About us</NavLink>
              </li>
              <li>
                <NavLink to="join-us">Our Community</NavLink>
              </li>
              <li>
                <NavLink to="legal/partner-us">Partnerships</NavLink>
              </li>
              <li>
                <NavLink to="blog">Blog</NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavL2;
