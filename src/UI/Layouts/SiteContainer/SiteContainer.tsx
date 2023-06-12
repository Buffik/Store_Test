import React from 'react';
import styles from './SiteContainer.module.scss';

type PropsType = {
  children: React.ReactNode;
};

function SiteContainer(props: PropsType) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}

export default SiteContainer;
