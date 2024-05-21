import { skillsFrontEnd, skillsBackEnd, skillsDatabase } from '../../constants';

import styles from './skillCard.module.scss';

export const SkillCard = ({ type, src }) => {
    let title = 'Front-End Development';
    let skills = skillsFrontEnd;
    switch (type) {
        case 'BE':
            title = 'Back-End Development';
            skills = skillsBackEnd;
            break;
        case 'DB':
            title = 'Databases';
            skills = skillsDatabase;
            break;
        default: break;
    }

    return (
        <section className={styles.skillCard}>
            <div className={styles.skillCard_title_img}>
                <img src={src} alt="" className={styles.skillCard_image} />
                <h1 className={styles.skillCard_title}>{title}</h1>
            </div>
            <ul>{skills.map((skill, index) => <li key={index}><img src={skill.src} alt="" /><span>{skill.title}</span></li>)}</ul>
        </section>
    )
};
