import styles from './SideBar.module.scss';
import { useAppSelector } from 'src/hooks/storeHooks';
import formatPrice from 'src/utils/formatPrice';
import { countItems, countPrice } from 'src/utils/countItems';
import TextItem from 'src/UI/TextItem/TextItem';
import Button from 'src/UI/Button/Button';

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

      <Button
        className={styles.summary__button}
        onClick={() => console.log('boo')}
      >
        BUY NOW
      </Button>
    </div>
  );
}

export default SideBar;
