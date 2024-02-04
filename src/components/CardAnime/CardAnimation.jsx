import React, { useEffect } from "react";
import "./CardAnimeStyle.css"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import card1Image from "../../assets/cards/card1.png";
import card2Image from "../../assets/cards/card2.png";
import card3Image from "../../assets/cards/card3.png";
import card4Image from "../../assets/cards/card4.png";
import card5Image from "../../assets/cards/card5.png";
import card6Image from "../../assets/cards/card6.png";
import card7Image from "../../assets/cards/card7.png";
import card8Image from "../../assets/cards/card8.png";
import card9Image from "../../assets/cards/card9.png";
import card10Image from "../../assets/cards/card10.png";

const CardAnimation = () => {

  const cardImages = [card1Image, card2Image, card3Image, card4Image, card5Image, card6Image, card7Image, card8Image, card9Image, card10Image];

  // useEffect(() => {
  //   const container = document.querySelector(".cards");

  //   const handleScroll = () => {
  //     container.style.transform = `
  //       translate(${-Math.floor(window.pageYOffset) * 0.377 + 125}px,
  //       ${-Math.floor(window.pageYOffset)}px)
  //       rotateX(-45deg)
  //       rotateZ(-15deg)
  //     `;
  //   };

  //   // Simulate automatic scroll on page load
  //   const simulateScroll = () => {
  //     let yOffset = 0;
  //     const scrollInterval = setInterval(() => {
  //       window.scrollTo(0, yOffset);
  //       yOffset += 10; // Adjust the scroll speed as needed

  //       if (yOffset >= container.clientHeight) {
  //         clearInterval(scrollInterval);
  //       }
  //     }, 16); // Approximately 60 frames per second
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Simulate automatic scroll on page load after a delay
  //   setTimeout(() => {
  //     simulateScroll();
  //   }, 1000); // Adjust the delay as needed

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 500, // Adjust the distance as needed
        y: 500, // Adjust the distance as needed
        transition: {
          duration: 2, // Adjust the duration as needed
        },
      });
    }
  }, [controls, inView]);


    return (
      <div className="main_container">
          <div className="cards" data-cards>
            <h1>Let's take a scroll...</h1>
            {cardImages.map((image, index) => (
              <div className="card" key={index}>
                <img src={image} alt={`Card ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>


    //   <>
    //   <motion.div
    //     ref={ref}
    //     initial={{ opacity: 0, x: -500, y: -500 }}
    //     animate={controls}
    //   >
    //   {cardImages.map((image, index) => (
    //     <div className="card" key={index}>
    //         <img src={image} alt={`Card ${index + 1}`} />
    //       </div>
    //     ))}
    // </motion.div>
    // </>
    );
  };

export default CardAnimation;
