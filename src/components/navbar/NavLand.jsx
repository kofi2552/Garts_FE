import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Land_Nav.css";
import { RiCloseLine } from "react-icons/ri";
import { HiMiniBars3 } from "react-icons/hi2";
import logo from "../../assets/logo_ga.png";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
// import { useAuth0 } from "@auth0/auth0-react";





//-------- FOR LANDING PAGE - FIRST PAGE ON VISIT-----------





const NavLand = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // const { loginWithRedirect } = useAuth0();

  
  //fetch categories
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


//logout function
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      // Clear the user data from the state variable
      setUser(null);
      sessionStorage.setItem("user", null);
      navigate("/");
      window.location.reload(); 
    } catch (err) {
      console.log(err.message);
    }
  };

//fetch user from session
  useEffect(() => {
    // Fetch user data from session storage
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      // Parse the stored JSON string to get the user object
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);


  // const handleLoginWithAuth0 = () => {
  //   // Trigger Auth0 login
  //   loginWithRedirect();
  // };

  return (
    <div className="navigation_landing-page">
      <div className="land_navbar">
        <div className="land_nav-container">
          <div className="land_nav-links">
            <div className="land_nav-logo">
            <div className="navbar-menu btn_mobile">
                <div className="menu-icon-container">
                < HiMiniBars3
                      color="#fff"
                      size={30}
                      className="open-menu-icon"
                      onClick={() => setToggleMenu(true)}
                    />
                </div>
            </div>
            <Link to="/">
                <img src={logo} alt="Getarts" width="80%" />
                 <p>Gart</p>
              </Link>
            </div>
            <div className="category-links_container">
              <ul className="cat-links">
                {/* <li>
                  <Link to="#" className="nl_link-item">
                    Popular {">"}
                  </Link>
                </li> */}
                {categories &&
                  categories.map((card, index) => (
                    <li key={index}>
                      <Link
                        to={`/search?cat=${card._id}`}
                        className="nl_link-item"
                      >
                        {card.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="land_nav-buttons">
            <ul className="btns_desktop">
              <div className="hide-mob">
                <li>
                  <Link to="/sell" className="nl_link-item">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="nl_link-item">
                    Pricing
                  </Link>
                </li>
                </div>
                {user ? (
                  <>
                <li className="user-name">
                  <Link to={user?.isAdmin ? "/admin": "/profile"}>
                  <HiUserCircle size={30} /> 
                  <span>{user?.username}</span>
                  </Link>
                </li>
                <MdOutlineLogout size={24} className="logout-icon" onClick={handleLogout}/>
                </>
                ):(
                  <>
                <li>
                  <Link to={"/login"} className="btn nl_link-login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="btn nl_link-signup">
                    Sign up
                  </Link>
                </li>
                </>
                )}
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
                          <Link to="/search" className="nl_link-item">
                            All projects
                          </Link>
                        </li>
                    
                        {categories &&
                          categories.map((card, index) => (
                            <li key={index}>
                              <Link
                                to={`/search?cat=${card._id}`}
                                className="nl_link-item"
                              >
                                {card.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                       
                  </div>
            </div>
    </div>
  );
};

export default NavLand;
