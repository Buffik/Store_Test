import { Link } from 'react-router-dom';
import logo from 'assets/logo/logo.png';

import styles from './Logo.module.scss';
import TextItem from 'UI/TextItem/TextItem';
import IconItem from '../Icons/IconItem';

function Logo() {
  return (
    <Link className={styles.logo__wrapper} to="/">
      <IconItem
        propClasses={styles.logo__icon}
        linkToIcon={logo}
        alt={'Logo'}
      />
      <TextItem className={styles.logo__title} as="h1">
        online store
      </TextItem>
    </Link>
  );
}

export default Logo;
