import styles from './footer.module.scss';

export const Footer = () =>
  <section className={styles.footer}>
    <p className={styles.footer_p}>
      © {new Date().getFullYear()}. All rights reserved.
    </p>
  </section>
