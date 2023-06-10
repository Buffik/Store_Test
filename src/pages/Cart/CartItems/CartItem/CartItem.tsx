import styles from './CartItem.module.scss';
import { CartProduct } from 'src/types/types';
import { useDispatch } from 'react-redux';
import {
  decreaseProductCount,
  increaseProductCount,
} from 'src/store/cartSlice';
import formatPrice from 'src/utils/formatPrice';
import TextItem from 'src/UI/TextItem/TextItem';
import Button from 'src/UI/Button/Button';

type CartProductTypes = CartProduct & { productIndex: number };

function CartItem(props: CartProductTypes) {
  const {
    productIndex,
    id,
    title,
    description,
    price,
    category,
    brand,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    count,
  } = props;

  const dispatch = useDispatch();

  return (
    <div className={styles.product}>
      <div className={styles.product__index}>{productIndex}</div>
      <div className={styles.info}>
        <img className={styles.info__img} src={thumbnail} alt={title} />
        <div className={styles.info__wrapper}>
          <TextItem as="h3" className={styles.info__header}>
            {title}
          </TextItem>
          <hr />
          <TextItem as="p" className={styles.info__description}>
            {description}
          </TextItem>
          <div className={styles.info_subtitles}>
            <div className={styles.info_subtitles__row}>
              <div>
                <TextItem as="span" className={styles.info_subtitles__header}>
                  Category:
                </TextItem>{' '}
                <TextItem as="span">{category}</TextItem>
              </div>
              <div>
                <TextItem as="span" className={styles.info_subtitles__header}>
                  Brand:
                </TextItem>{' '}
                <TextItem as="span">{brand}</TextItem>
              </div>
            </div>
            <div className={styles.info_subtitles__row}>
              <div>
                <TextItem as="span" className={styles.info_subtitles__header}>
                  Rating:
                </TextItem>{' '}
                <TextItem as="span">{rating}</TextItem>
              </div>
              <div>
                <TextItem as="span" className={styles.info_subtitles__header}>
                  Discount:
                </TextItem>{' '}
                <TextItem as="span">{discountPercentage + '%'}</TextItem>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.product__buttons}>
        <TextItem className={styles.product__textStock}>
          <>
            {'Available stock: '}
            {stock}
          </>
        </TextItem>
        <Button
          disabled={count >= stock}
          className={styles.product__button}
          onClick={() => dispatch(increaseProductCount(id))}
        >
          +
        </Button>
        <TextItem className={styles.product__textCount}>{count}</TextItem>
        <Button
          className={styles.product__button}
          onClick={() => dispatch(decreaseProductCount(id))}
        >
          {count === 1 ? 'Drop' : '-'}
        </Button>
        <TextItem className={styles.product__textPrice}>
          {formatPrice(price * count)}
        </TextItem>
      </div>
    </div>
  );
}

export default CartItem;
