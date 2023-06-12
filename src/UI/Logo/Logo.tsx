import logo from 'assets/logo/logo.png';

import styles from './Logo.module.scss';
import TextItem from 'UI/TextItem/TextItem';
import IconItem from '../Icons/IconItem';

function Logo() {
  return (
    <div className={styles.logo__wrapper}>
      <IconItem
        propClasses={styles.logo__icon}
        linkToIcon={logo}
        alt={'Logo'}
      />
      <TextItem className={styles.logo__title} as="h1">
        online store
      </TextItem>
    </div>
  );
}

export default Logo;
