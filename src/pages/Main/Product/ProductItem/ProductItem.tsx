import React from 'react';
import styles from './ProductItem.module.scss';
import { Product } from 'src/types/types';
import formatPrice from 'src/utils/formatPrice';
import Button from 'src/UI/Button/Button';
import ProductAddDropButton from './ProductAddDropButton/ProductAddDropButton';
import { useAppDispatch, useAppSelector } from 'src/hooks/storeHooks';
import { toggleProduct } from 'src/store/cartSlice';

export default function ProductsItem(props: Product) {
  const {
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
  } = props;

  const cartItems = useAppSelector((state) => state.cart.list);
  const dispatch = useAppDispatch();

  const isInCart = cartItems.some((item) => {
    return item.id === id;
  });

  const handleClick = (): void => {
    dispatch(toggleProduct({ ...props, count: 1 }));
  };

  return (
    <section className={styles.product}>
      <img
        className={styles.product__image}
        src={thumbnail}
        alt={title}
        width={250}
        height={150}
      />

      <div className={styles.product__secondColumn}>
        <h3 className={styles.product__title}>{title}</h3>
        <p className={styles.product__info}>{description}</p>
        <dl className={styles.product__parameter}>
          <dt className={styles.product__parameter__title}>Category: </dt>
          <dd>{category}</dd>
        </dl>
        <dl className={styles.product__parameter}>
          <dt className={styles.product__parameter__title}>Brand: </dt>
          <dd>{brand}</dd>
        </dl>
        <dl className={styles.product__parameter}>
          <dt className={styles.product__parameter__title}>Discount: </dt>
          <dd>{discountPercentage}%</dd>
        </dl>
        <dl className={styles.product__parameter}>
          <dt className={styles.product__parameter__title}>Rating: </dt>
          <dd>{rating}</dd>
        </dl>
        <dl className={styles.product__parameter}>
          <dt className={styles.product__parameter__title}>Stock: </dt>
          <dd>{stock}</dd>
        </dl>
      </div>
      <div className={styles.product__thirdColumn}>
        <dl className={styles.product__parameter_price}>
          <dt className={styles.product__parameter_price__title}>Price: </dt>
          <dd>{formatPrice(price)}</dd>
        </dl>
        <div className={styles.product__buttonsContainer}>
          <ProductAddDropButton isInCart={isInCart} handleClick={handleClick} />
          <Button className={styles.product__link}>Buy now</Button>
        </div>
      </div>
    </section>
  );
}
