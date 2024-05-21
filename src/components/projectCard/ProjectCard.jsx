import { Button } from '../button/Button.jsx';
import { projectDetails } from "../../constants";

import styles from "./projectCard.module.scss";

export const ProjectCard = ({ chosenProject }) => {
    const details = projectDetails[chosenProject];
    const indices = {
        daoMaker: 0,
        ethermail: 1,
        nordicVelo: 2,
        coolCat: 3,
        pebble: 4,
        wiNit: 5,
    };

    return (
        <div className={styles.project_card}>
            <div className={styles.project_card_content}>
                <div className={styles.project_card_description}>
                    <h1 className={styles.project_card_title}>{details.title}</h1>
                    <p className={styles.project_card_about}>{details.about}</p>
                    <div className={styles.mobile_image} >
                        <img className={chosenProject === indices["daoMaker"] ? styles.d_block : styles.d_none} src={projectDetails[indices["daoMaker"]].src} alt="" />
                        <img className={chosenProject === indices["coolCat"] ? styles.d_block : styles.d_none} src={projectDetails[indices["coolCat"]].src} alt="" />
                        <img className={chosenProject === indices["pebble"] ? styles.d_block : styles.d_none} src={projectDetails[indices["pebble"]].src} alt="" />
                        <img className={chosenProject === indices["wiNit"] ? styles.d_block : styles.d_none} src={projectDetails[indices["wiNit"]].src} alt="" />
                        <img className={chosenProject === indices["ethermail"] ? styles.d_block : styles.d_none} src={projectDetails[indices["ethermail"]].src} alt="" />
                        <img className={chosenProject === indices["nordicVelo"] ? styles.d_block : styles.d_none} src={projectDetails[indices["nordicVelo"]].src} alt="" />
                    </div>
                    <p>
                        {details.description}
                    </p>
                    <h4 className={styles.project_card_challenges}>Challenges:</h4>
                    <span>
                        {details.challenges}
                    </span>
                    <span>
                        <h4>Role:</h4>
                        <span>{details.role}</span>
                    </span>
                    {details.websiteHref && <div className={styles.project_button}>
                        <Button
                            text="Visit Website"
                            color="#6246EA"
                            background='#fff'
                            borderColor='#0090ff'
                            href={details.websiteHref}
                            src={"/icons/href.svg"}
                            isDownload={false}
                            target="blank"
                            hoverEffect={"purple"}
                            hoverDetails={"portfolioButton"}
                        />
                    </div>}
                </div>
                <div className={styles.project_card_image}>
                    <img className={chosenProject === indices["daoMaker"] ? styles.d_block : styles.d_none} src={projectDetails[indices["daoMaker"]].src} alt="" />
                    <img className={chosenProject === indices["coolCat"] ? styles.d_block : styles.d_none} src={projectDetails[indices["coolCat"]].src} alt="" />
                    <img className={chosenProject === indices["pebble"] ? styles.d_block : styles.d_none} src={projectDetails[indices["pebble"]].src} alt="" />
                    <img className={chosenProject === indices["wiNit"] ? styles.d_block : styles.d_none} src={projectDetails[indices["wiNit"]].src} alt="" />
                    <img className={chosenProject === indices["ethermail"] ? styles.d_block : styles.d_none} src={projectDetails[indices["ethermail"]].src} alt="" />
                    <img className={chosenProject === indices["nordicVelo"] ? styles.d_block : styles.d_none} src={projectDetails[indices["nordicVelo"]].src} alt="" />
                </div>
            </div>
        </div>
    );
};
