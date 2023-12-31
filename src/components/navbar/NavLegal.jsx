import { NavLink } from "react-router-dom";

const NavLegal = () => {
  return (
    <div className="navigation-tab">
      <ul className="side-nav-tab">
        <li>
          <NavLink className="navlink-item" to="usage">
            Terms of use
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink-item" to="partner-us">
            Partnerships
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink-item" to="privacy">
            Privacy Policy
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink-item" to="terms-conditions">
            License agreement
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink-item" to="community">
            0ur Community
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink-item" to="cookies">
            Cookie Policy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLegal;
