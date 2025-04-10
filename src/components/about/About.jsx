import { env } from "../../env.js";
import { Button } from "../button/Button.jsx";

import styles from "./about.module.scss";

export const About = () => (
  <section className={styles.about} id="about">
    <div className={styles.about_text}>
      <h2>About Me</h2>
      <p>
        {`I am ${env.ownerName}, a passionate hardcoder from Decentralized World, 
                Full-Stack Developer specializing in building software in various industries, including 
                blockchain/cryptocurrency, Web3, DeFi, mobile and web applications, etc. I have extensive knowledge of the design, setup, testing, 
                and maintenance of software systems.`}
      </p>
      <div className={styles.about_buttons}>
        <Button
          className={styles.aboutButton}
          text="Download CV"
          color="#fff"
          background="linear-gradient(269.64deg, #4b30cd 0.26%, #78fd7d 99.66%)"
          href="/files/Narek-cv.pdf"
          src={"/icons/download.svg"}
          isDownload={true}
          hoverDetails={"cvButton"}
        />
        <Button
          className={styles.aboutButton}
          text="Look at CV"
          color="#000"
          background="#fff"
          borderColor="#000"
          href="https://ik.imagekit.io/d7ildaprs/Narek-cv.pdf"
          target="_blank"
          hoverEffect={"purple"}
          hoverDetails={"portfolioButton"}
        />
      </div>
    </div>
    <div className={styles.about_image}>
      <img src="images/about.svg" alt="" />
    </div>
  </section>
);
