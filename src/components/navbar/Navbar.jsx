import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Land_Nav.css";
import { RiCloseLine } from "react-icons/ri";
import { HiMiniBars3 } from "react-icons/hi2";
import logo from "../../assets/logo_2_color.png";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import SimpleSearch from "../SimpleSearch/SimpleSearch";

const NavLand = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await newRequest.get("categories/all");

        setCategories(response.data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="navigation_landing-page">
      <div className="land_navbar">
        <div className="land_nav-container">
          <div className="land_nav-links">
            <div className="land_nav-logo">
            <div className="navbar-menu btn_mobile">
                <HiMiniBars3
                      color="#fff"
                      size={30}
                      className="open-menu-icon"
                      onClick={() => setToggleMenu(true)}
                    />
            </div>
            <Link to="/">
                <img src={logo} alt="Getarts" width="70%" />
                 <p>Gart</p>
              </Link>
            </div>
            <div className="category-links_container">
              <SimpleSearch/>
            </div>
          </div>
          <div className="land_nav-buttons">
            <ul className="btns_desktop">
              <div className="hide-mob">
                <li>
                  <Link to="sell" className="nl_link-item">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="pricing" className="nl_link-item">
                    Pricing
                  </Link>
                </li>
                </div>
                <li>
                  <Link to="/login" className="btn nl_link-login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="btn nl_link-signup">
                    Sign up
                  </Link>
                </li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className={toggleMenu
                        ?"blurr-overlay":""}>
      </div>
            <div className="land_mobile-sidebar">
                  <div
                    className={
                      toggleMenu
                        ? "land_mob-menu-links-container active"
                        : "land_mob-menu-links-container"
                    }
                  >
                    <div className="sidebar-btn">
                    {toggleMenu ? (
                    <RiCloseLine
                      size={35}
                      className="close-menu-icon"
                      onClick={() => setToggleMenu(false)}
                    />
                  ) : (
                    <HiMiniBars3
                      size={35}
                      className="open-menu-icon"
                      onClick={() => setToggleMenu(true)}
                    />
                  )}
                </div>
                      <ul className="cat-links">
                        <li>
                          <Link to="#" className="nl_link-item">
                            Popular
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="nl_link-item">
                            Latest 
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="nl_link-item">
                            Popular 
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="nl_link-item">
                            Latest 
                          </Link>
                        </li>
                        {categories &&
                          categories.map((card, index) => (
                            <li key={index}>
                              <button
                                onClick={() => navigate(`/lessons?cat=${card._id}`)}
                                className="nl_link-item"
                              >
                                {card.name}
                              </button>
                            </li>
                          ))}
                      </ul>
                       
                  </div>
            </div>
    </div>
  );
};

export default NavLand;
