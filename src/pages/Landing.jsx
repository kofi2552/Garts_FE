import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Landing_Style.css";
import NavLand from "../components/navbar/NavLand";
import { motion } from "framer-motion";
// import Featured from "../components/Search/Featured";
import Meta from "../components/Meta"

function Landing() {
  const [move, setMove] = useState(false);

  const ScrollLineAnime = () => {
    if (window.scrollY > 400) {
      setMove(true);
    } else {
      setMove(!move);
    }
  };

  window.addEventListener("scroll", ScrollLineAnime);

  const ContVariants = {
    hidden: {
      opacity: 0,
      y: "-2vh",
    },
    visible: {
      opacity: 1,
      y: "0",
    },
  };

  

  return (
    <>
    <section className="home-page-wrapper">
        <Meta title="Gart-Download Quality Artworks"/>
      <NavLand />
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
        <div className="main-content-container">
          <div className="home-site-content">
            <div className="home-bgrnd">
                <motion.div
                className="center-div"
                  variants={ContVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, delay: 0.2, type: "spring" }}
                >
                  <h3 className="heading-text">
                 We create impactful digital <strong>assets.</strong>
                  </h3>
                  <p className="sub-text text-white">
                  Join Curift Today and Ignite Your Creative Journey!
                  </p>
                  {/* <div className="search-section">
                    <Featured />
                  </div> */}
                  <Link
                    to="/projects"
                    className="home-cta text-center text-white --normal-button"
                  >
                    Get Started
                  </Link>
                </motion.div>
                </div>
          </div>
        </div>
      </section>
      <section className="creative-areas">
          <div>
            <h2>Our Creative areas</h2>
            <p></p>
          </div>
      </section>
      </>
  );
}

export default Landing;


