import { useState } from 'react';
import { projectDetails } from '../../constants';

import styles from './tabs.module.scss';

export const Tabs = ({ chooseProject }) => {
  const [active, setActive] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const selectProject = (id) => {
    setActive(id);
    chooseProject(id);
    setTop(id * 100);
    setLeft(id * 90);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.border} style={{ top: `${top}px` }} />
      <div className={styles.border_mobile} style={{ left: `${left}px` }} />
      {projectDetails.map((project, index) => (
        <div
          className={active === index ? styles.active : styles.deActive}
          onClick={() => selectProject(index)}
          key={index}
        >
          <span>{project.title}</span>
        </div>
      ))}
    </div>
  );
};
