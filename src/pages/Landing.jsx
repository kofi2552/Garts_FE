import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Landing_Style.css";
import "./css/Landing2.css";
import NavLand from "../components/navbar/NavLand";
import { motion } from "framer-motion";
// import Featured from "../components/Search/Featured";
import Meta from "../components/Meta"
// import CardAnimation from "../components/CardAnime/CardAnimation";
import { BsArrowRight } from "react-icons/bs";

function Landing() {
  const [move, setMove] = useState(false);
  const [categories, setCategories] = useState([]);

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
      <div className="home-images">
        <div className="left-ad">
          <img className="_lartfg" src="images/home/heroBackgroundLeft.png" alt="site-ad-image"/>
        </div>
        <div className="right-ad">
        <img className="_rartfg" src="images/home/heroBackgroundRight.png" alt="site-ad-image"/>
        </div>
      </div>
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
      <section className="service-content-wrapper">
        <div className="service-container">
          <div className="section-heading">
            <div>
              <strong>What We Do For You</strong>
              <br />
             
              <span className="underline"></span>
            </div>
            <p>
              We have curated fone graphics and digital assets to fastrac your dessign process.
            </p>
          </div>

          <div className="section-content">
            {/* <div className="ctrls-indicator">
              <img src="../assets/home/gallery01.jpg" />
            </div> */}
            <div className="carousel-container">
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="images/icons/lightbulb.png" />
                  </div>
                  <div>
                    <h2>Instant</h2>
                    <p>
                    Browse vast library of high-quality digital assets to spark your creativity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="images/icons/settings.png" />
                  </div>
                  <div>
                    <h2>Effortless</h2>
                    <p>
                    Find the perfect assets quickly with our user-friendly platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="images/icons/growth.png" />
                  </div>
                  <div>
                    <h2>Stay Ahead</h2>
                    <p>
                    Discover fresh content and elevate your projects with the latest assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          className="ring-img"
          src="../../assets/images/ring.svg"
        /> */}
      </section>
     
      <section className="wga-content-wrapper">
        <div className="wga-container">
          <div className="wga-content-left">
       
              <img src="images/home/gallery01.jpg" />
          
          </div>
          <div className="wga-content-right">
            <div className="section-heading">
              <div>
                <strong>Why Curift?</strong>
                <span className="underline"></span>
              </div>
            </div>
            <div className="wga-description-para">
              <p>
              Curift isn't just another digital asset marketplace. We take pride in offering a meticulously curated collection of high-quality resources. Our team of experts handpicks only the best, ensuring you have access to professional-grade assets that elevate your work. 
              </p>
              <p>
              Stop wasting precious time scouring the internet for digital assets. Curift offers a user-friendly platform designed with creatives in mind. Our intuitive interface makes finding the resources you need a breeze. Powerful search filters and curated collections help you discover exactly what you're looking for in seconds. 
              </p>
              <p>
              Curift is more than just a platform; it's a thriving community of passionate creatives.  Connect with fellow artists, designers, and other talented individuals. Share ideas, discover new trends, and get inspired by the work of others.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="re-content-wrapper">
        <div className="re-container">
          <div className="section-heading">
            <div className="heading-box">
              <strong>Recent Engagements</strong>
              <br />
              <span>By Our Experts</span>
            </div>
            <span className="underline"></span>
          </div>

          <div className="section-content">
            <div className="carousel-container">
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="../../assets/images/HMRC-logo.png" />
                  </div>
                  <div>
                    <h2>HMRC CDIO</h2>
                    <p>Agile Consultancy</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="img-box missguided">
                    <img src="../../assets/images/missguided.png" />
                  </div>
                  <div>
                    <h2>Missguided UK</h2>
                    <p>Agile Consultancy</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="../../assets/images/svgexport.png" />
                  </div>
                  <div>
                    <h2>
                      Digital Bananas
                      <br />
                      Technology
                    </h2>
                    <p>Agile Coaching</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="ring-img"
          src="../../assets/images/ring.svg"
          alt="ring"
        />
      </section> */}

      {/* <section className="gvf-content-wrapper">
        <div className="gvf-container">
          <div className="section-heading">
            <div>
              <strong>Say Yes To Our Value</strong>
              <br />
              <span className="underline"></span>
            </div>
          </div>
          <div className="section-content">
          <div className="ctrls-indicator">
              <img src="../../assets/images/control.png" />
            </div> 
            <div className="carousel-container">
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="../../assets/images/performance 1.svg" />
                  </div>
                  <div>
                    <h2>Focus on What Matters</h2>
                    <p>
                    Invest your energy in developing your artistic vision, not hunting down resources.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="../../assets/images/pulse 1.svg" />
                  </div>
                  <div>
                    <h2>Amplify Your Impact</h2>
                    <p>Elevate the quality and professionalism of your work with top-notch digital assets available at your fingertips.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="ring-img"
          src="../../assets/images/ring.svg"
          alt="ring"
        /> 
      </section> */}

      <section className="xas-content-wrapper">
        <div className="xas-container">
          <div className="xas-content-left">
            <div className="xas-description-para">
              <h1>Explore the Curift Collection!</h1>
              <a href="/signup">Sign Up for Free! <BsArrowRight /></a>
            </div>
          </div>
          <div className="xas-content-right">
            <img src="images/home/cta.png" />
          </div>
        </div>
      </section>

      
      {/* <section className="testimonials-content-wrapper">
        <div className="testimonials-container">
          <div className="section-heading">
            <div>
              <strong>Our Testimonials</strong>
              <br />
              <span>What Our Clients Are Saying</span>
              <span className="underline"></span>
            </div>
          </div>

          <div className="section-content">
            <div className="carousel-container">
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="../../assets/images/quote.svg" />
                  </div>
                  <div>
                    <p>
                      Lorem Ipsum has been the industry&apos;s standard dummy
                      text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries.
                    </p>
                    <div className="testimo-user">
                      <span>-</span>
                      UI Soup
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="img-box">
                    <img src="../../assets/images/quote.svg" />
                  </div>
                  <div>
                    <p>
                      Lorem Ipsum has been the industry&apos;s standard dummy
                      text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries.
                    </p>
                    <div className="testimo-user">
                      <span>-</span>
                      UI Soup
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </>
  );
}

export default Landing;


