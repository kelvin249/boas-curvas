import React from 'react'
import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './carousel.module.css'

// https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/

const Carousel = ({ images }) => {
  console.log(images)

    const [currentIndex, setCurrentIndex] = useState(0)
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      )
    }

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      )
    }

    const play = () => {
      handleNext()
      setTimeout(play, 5000)
    }

    const handleKeys = () => {}

    // Implement keyboard control
    useEffect(() => {
    document.onkeydown = function(e) {
      switch (e.keyCode) {
          case 37:
              handlePrevious()
              break;
          case 39:
              handleNext()
              break;
          default:
              break;
      }
    }
  })

    return (
        <div className={styles.carouselImages}>
            
            <GatsbyImage image={getImage(images[currentIndex])} alt="xxx" />
            
            <div className={styles.slide_direction}>
            <div
             className={styles.left}
              onClick={handlePrevious}
              onKeydown={handleKeys}
              tabIndex="0"
              role="button"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
              </svg>
            </div>
            <div className=
              {styles.right} 
              onClick={handleNext}
              onKeydown={handleKeys}
              tabIndex="0"
              role="button"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
              </svg>
            </div>
          </div>
          <div className={styles.controlBox}>
            <button onClick={play} >Play</button>
            {` `}{currentIndex} of {images.length} 
          </div>
        </div>
        
      )

    }
    export default Carousel;
