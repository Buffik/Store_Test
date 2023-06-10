import Logo from 'src/UI/Logo/Logo';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.linksContainer}>
          {'Developed by '}
          <a className={styles.footer__link} href="https://github.com/Buffik">
            Buffik
          </a>
          {', '}
        </p>
        <p>Online Store © 2023</p>
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
