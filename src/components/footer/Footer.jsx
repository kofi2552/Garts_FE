import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="padding">
          <div className="clear-fix">
            <div className="left">
              <ul className="nave">
                <li className="nav-item">
                  <Link className="nav-link" to="/company/legal/usage">
                    Terms And Conditions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/company/join-us">
                    Join our Community
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/company/legal/partner-us">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            <div className="right">
              <ul className="nave">
                <li className="nav-item">
                  <Link className="nav-link" to="/company/">
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/company/legal/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    &copy; 2022 Vixcous. All rights reserved.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
