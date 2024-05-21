import styles from './socialButton.module.scss';

export const SocialButton = ({ src, href }) =>
    <a href={href} className={styles.socialButton} target="blank">
        <img src={src} alt="" />
    </a>
