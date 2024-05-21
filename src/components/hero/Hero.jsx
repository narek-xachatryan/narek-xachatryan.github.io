import { env } from '../../env.js';
import { Button } from '../button/Button.jsx';

import styles from './hero.module.scss';

export const Hero = () => {

  return (
  <section className={styles.hero} id='hero'>
    <div className={styles.hero_background_image}>
      <div>
        <h2>Hello, I’m a</h2>
        <h1>Full-Stack Developer</h1>
        <div className={styles.hero_buttons}>
          <Button
            className={styles.Herobutton}
            text='Reach out to me'
            color='#000'
            background='#fff'
            borderColor='#fff'
            // href={'mailto:'+env.email}
            isDownload={false}
            hoverEffect={'purple'}
            hoverDetails={'reachOutMe'}
            href="#contact"
            // onClick={() => scrollToDiv('contact')}
          />
          <Button
            className={styles.Herobutton}
            text='Projects'
            color='#fff'
            background='none'
            borderColor='#fff'
            href={'#projects'}
            isDownload={false}
            hoverDetails={'projectButton'}
          />
          {/* <Button
            className={styles.Herobutton}
            text='Schedule a call'
            color='#6246EA'
            background='#fff'
            borderColor='#fff'
            href={env.solicyCalendlyLink}
            isDownload={false}
            hoverEffect={'purple'}
            hoverDetails={'reachOutMe'}
            target="_blank"
          /> */}
        </div>
      </div>
    </div>
  </section>
);
}