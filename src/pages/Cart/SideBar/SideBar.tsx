import React from 'react';
import styles from './SideBar.module.scss';
import { useAppSelector } from 'src/hooks/storeHooks';
import formatPrice from 'src/utils/formatPrice';
import { countItems, countPrice } from 'src/utils/countItems';

function SideBar() {
  const data = useAppSelector((state) => state.cart.list);

  const cartTotalItems = countItems(data);

  const fullPrice = countPrice(data);

  return (
    <div className={styles.container}>
      <h2>Summary</h2>
      <div className={styles.textSummary}>
        <span className={styles.textProducts}>Products:</span> {cartTotalItems}
      </div>
      <div className={styles.textSummaryLineThrough}>
        <span className={styles.textTotal}>Total: </span>
        {formatPrice(fullPrice)}
      </div>

      <button
        className={styles.byuButton}
        type="button"
        onClick={() => console.log('boo')}
      >
        {' '}
        BUY NOW
      </button>
    </div>
  );
}

export default SideBar;
