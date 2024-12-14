import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

// https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/

const IndexPage = () => (

  <Layout>

    <div className={styles.textCenter}>

      <div className={styles.topline}>
        There are <Link to='/bikes'>bikes</Link>
      </div>

      <div className={styles.topline}>
       and there are <Link to='/vincent'>
      <StaticImage
          src="../images/vincent.webp"
          placeholder="blurred"
          width={250}
          height={100}
          formats={["auto", "webp", "avif"]}
          alt="Vincent Logo"
          transformOptions={{ fit: "cover"}}

        />
        </Link> 
      </div>
      
      <div className={styles.navText}>
        Navigate using the arrow buttons on screen, the Play button (5 second delay) or keyboard arrow buttons.
      </div>
    </div>

    
  </Layout>
)
export default IndexPage