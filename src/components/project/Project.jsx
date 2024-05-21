import { useState } from 'react';
import { ProjectCard } from '../projectCard/ProjectCard.jsx';
import { Tabs } from '../tabs/Tabs.jsx';

import styles from "./project.module.scss";

export const Project = () => {
    const [chosenProject, setChoseProject] = useState(0);
    const chooseProject = (id) => setChoseProject(id);

    return (
        <section className={styles.project} id="projects">
            <h1 className={styles.project_title}>Some of My Recent Projects</h1>
            <div className={styles.project_content}>
                <div className={styles.project_content_tabs}>
                    <Tabs chooseProject={chooseProject} />
                </div>
                <ProjectCard chosenProject={chosenProject} />
            </div>
        </section>
    );
};
