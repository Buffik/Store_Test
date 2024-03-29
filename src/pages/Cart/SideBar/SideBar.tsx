import styles from './SideBar.module.scss';
import { useAppSelector } from 'src/hooks/storeHooks';
import formatPrice from 'src/utils/formatPrice';
import { countItems, countPrice } from 'src/utils/countItems';
import TextItem from 'src/UI/TextItem/TextItem';
import { Link } from 'react-router-dom';

function SideBar() {
  const data = useAppSelector((state) => state.cart.list);

  const cartTotalItems = countItems(data);

  const fullPrice = countPrice(data);

  return (
    <div className={styles.summary}>
      <TextItem as="h2">Summary</TextItem>
      <TextItem className={styles.summary__text}>
        <>
          <TextItem as="span" className={styles.summary__text_subtitle}>
            Products:
          </TextItem>{' '}
          {cartTotalItems}
        </>
      </TextItem>
      <TextItem className={styles.summary__text}>
        <>
          <TextItem as="span" className={styles.summary__text_subtitle}>
            {'Total: '}
          </TextItem>
          {formatPrice(fullPrice)}
        </>
      </TextItem>

      <Link to="/order" className={styles.summary__button}>
        BUY NOW
      </Link>
    </div>
  );
}

export default SideBar;
