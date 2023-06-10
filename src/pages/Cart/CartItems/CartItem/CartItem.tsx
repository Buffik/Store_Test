import React from 'react';
import styles from './CartItem.module.scss';
import { CartProduct } from 'src/types/types';
import { useDispatch } from 'react-redux';
import {
  decreaseProductCount,
  increaseProductCount,
} from 'src/store/cartSlice';
import formatPrice from 'src/utils/formatPrice';

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
    <div className={styles.cardProduct}>
      <div className={styles.productIndex}>{productIndex}</div>
      <div className={styles.dataLinkWrapper}>
        <img className={styles.infoImg} src={thumbnail} alt={title} />
        <div className={styles.infoWrapper}>
          <h3 className={styles.infoHeader}>{title}</h3>
          <hr />
          <p className={styles.textAbout}>{description}</p>
          <div className={styles.subtitlesWrapper}>
            <div className={styles.subtitlesWrapperFirstLine}>
              <div>
                <span className={styles.infoHeaders}>Category:</span>{' '}
                <span>{category}</span>
              </div>
              <div>
                <span className={styles.infoHeaders}>Brand:</span>{' '}
                <span>{brand}</span>
              </div>
            </div>
            <div className={styles.subtitlesWrapperSecondLine}>
              <div>
                <span className={styles.infoHeaders}>Rating:</span>{' '}
                <span>{rating}</span>
              </div>
              <div>
                <span className={styles.infoHeaders}>Discount:</span>{' '}
                <span>{discountPercentage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.textStock}>
          {'Available stock: '}
          {stock}
        </div>
        <button
          className={styles.cart__button}
          onClick={() => dispatch(increaseProductCount(id))}
        >
          +
        </button>
        <div className={styles.textCount}>{count}</div>
        <button
          className={styles.cart__button}
          onClick={() => dispatch(decreaseProductCount(id))}
        >
          {count === 1 ? 'Drop from cart' : '-'}
        </button>
        <div className={styles.textPrice}>{formatPrice(price * count)}</div>
      </div>
    </div>
  );
}

export default CartItem;
