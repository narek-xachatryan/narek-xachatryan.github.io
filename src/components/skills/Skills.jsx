import { SkillCard } from '../skillCard/SkillCard.jsx';
import { skills } from '../../constants';

import styles from './skill.module.scss';

export const Skills = () => {
    return (
        <section className={styles.skill} id="skills">
            <h1>Technical Skills</h1>
            <div className={styles.skill_cards}>
                {skills.map((item, index) => <SkillCard type={item.skill} src={item.src} key={index} />)}
            </div>
        </section>
    )
};
