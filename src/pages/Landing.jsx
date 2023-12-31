import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Landing_Style.css";
import NavLand from "../components/navbar/NavLand";
import { motion } from "framer-motion";
import Featured from "../components/Search/Featured";
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

  // let ref = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  function handleSwipe() {}

  return (
    <section className="home-page-wrapper">
        <Meta title="Gart-Download Quality Artworks"/>
      <NavLand />
        <div className="main-content-container">
          <div className="home-site-content">
                <motion.div
                className="center-div"
                  variants={ContVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, delay: 0.2, type: "spring" }}
                >
                  <h3 className="heading-text">
                    Quality, <span>Affordable</span> Assets
                  </h3>
                  <p className="sub-text text-white">
                    Curated for creatives like you.
                  </p>
                  <div className="search-section">
                    <Featured />
                  </div>
                  <Link
                    to="/search"
                    className="home-cta text-center text-white --normal-button"
                  >
                    Get Started
                  </Link>
                </motion.div>
          </div>
        </div>
      </section>
  
  );
}

export default Landing;


