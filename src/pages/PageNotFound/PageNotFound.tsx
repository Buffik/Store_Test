import SiteContainer from 'src/UI/Layouts/SiteContainer/SiteContainer';
import styles from './PageNotFound.module.scss';
import emptyBox from 'assets/icons/empty.png';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className={styles.main}>
      <SiteContainer>
        <section className={styles.message}>
          <img src={emptyBox} alt="A confused person inside a box" />
          <h1 className={styles.title}>Error 404: Page Not Found!</h1>
          <p className={styles.text}>This page does not seem to exist.</p>
          <Link className={styles.link} to="/">
            Back to main
          </Link>
        </section>
      </SiteContainer>
    </main>
  );
}

export default PageNotFound;
