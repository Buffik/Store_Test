import SiteContainer from 'src/UI/Layouts/SiteContainer/SiteContainer';
import styles from './PageNotFound.module.scss';
import emptyBox from 'assets/icons/empty.png';
import { Link } from 'react-router-dom';
import TextItem from 'src/UI/TextItem/TextItem';

function PageNotFound() {
  return (
    <main className={styles.main}>
      <SiteContainer>
        <section className={styles.message}>
          <img src={emptyBox} alt="A confused person inside a box" />
          <TextItem as="h1" className={styles.message__title}>
            Error 404: Page Not Found!
          </TextItem>
          <TextItem as="p" className={styles.message__text}>
            This page does not seem to exist.
          </TextItem>
          <Link className={styles.message__link} to="/">
            Back to main
          </Link>
        </section>
      </SiteContainer>
    </main>
  );
}

export default PageNotFound;
