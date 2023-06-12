import Logo from 'src/UI/Logo/Logo';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import TextItem from 'src/UI/TextItem/TextItem';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <TextItem as="p" className={styles.linksContainer}>
          <>
            {'Developed by '}
            <a className={styles.footer__link} href="https://github.com/Buffik">
              Buffik
            </a>
            {', '}
          </>
        </TextItem>
        <TextItem as="p">Online Store © 2023</TextItem>
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
