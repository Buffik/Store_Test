import styles from './ProductItem.module.scss';
import { Product } from 'src/types/types';
import formatPrice from 'src/utils/formatPrice';
import Button from 'src/UI/Button/Button';
import ProductAddDropButton from './ProductAddDropButton/ProductAddDropButton';
import { useAppDispatch, useAppSelector } from 'src/hooks/storeHooks';
import { toggleProduct } from 'src/store/cartSlice';
import TextItem from 'src/UI/TextItem/TextItem';
import { Link } from 'react-router-dom';

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
        <TextItem as="h3" className={styles.product__title}>
          {title}
        </TextItem>
        <TextItem as="p" className={styles.product__info}>
          {description}
        </TextItem>
        <TextItem as="dl" className={styles.product__parameter}>
          <>
            <TextItem as="dt" className={styles.product__parameter__title}>
              {'Category: '}
            </TextItem>
            <TextItem as="dd">{category}</TextItem>
          </>
        </TextItem>
        <TextItem as="dl" className={styles.product__parameter}>
          <>
            <TextItem as="dt" className={styles.product__parameter__title}>
              {'Brand: '}
            </TextItem>
            <TextItem as="dd">{brand}</TextItem>
          </>
        </TextItem>
        <TextItem as="dl" className={styles.product__parameter}>
          <>
            <TextItem as="dt" className={styles.product__parameter__title}>
              {'Discount: '}
            </TextItem>
            <TextItem as="dd">{discountPercentage + '%'}</TextItem>
          </>
        </TextItem>
        <TextItem as="dl" className={styles.product__parameter}>
          <>
            <TextItem as="dt" className={styles.product__parameter__title}>
              {'Rating: '}
            </TextItem>
            <TextItem as="dd">{rating}</TextItem>
          </>
        </TextItem>
        <TextItem as="dl" className={styles.product__parameter}>
          <>
            <TextItem as="dt" className={styles.product__parameter__title}>
              {'Stock: '}
            </TextItem>
            <TextItem as="dd">{stock}</TextItem>
          </>
        </TextItem>
      </div>
      <div className={styles.product__thirdColumn}>
        <TextItem as="dl" className={styles.product__parameter_price}>
          <>
            <TextItem
              as="dt"
              className={styles.product__parameter_price__title}
            >
              {'Price: '}
            </TextItem>
            <TextItem as="dd">{formatPrice(price)}</TextItem>
          </>
        </TextItem>
        <div className={styles.product__buttonsContainer}>
          <ProductAddDropButton isInCart={isInCart} handleClick={handleClick} />
          <Link to="/order" className={styles.product__link}>
            Buy now
          </Link>
        </div>
      </div>
    </section>
  );
}
