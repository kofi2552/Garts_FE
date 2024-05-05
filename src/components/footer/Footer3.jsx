import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer3 = () => {
  return (
    <div>
      <div className="footer section__padding">
        <div className="padding">
          <div className="clear-fix">
            <div className="left">
              <ul className="nave">
                <li className="nav-item">
                  <Link className="nav-link" to="legal/terms-conditions">
                    License agreement
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="join-us">
                    Join our Community
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="legal/partner-us">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="nave">
                <li className="nav-item">
                  <span className="nav-link">
                    &copy; 2022 Vixcous. All rights reserved.
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="legal/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
