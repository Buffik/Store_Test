import React from 'react';
import styles from './CartContainer.module.scss';

type PropsType = {
  children: React.ReactNode;
};

function CartContainer(props: PropsType) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}

export default CartContainer;
