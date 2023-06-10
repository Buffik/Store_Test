import React from 'react';
import styles from './CartItems.module.scss';
import { useAppSelector } from 'src/hooks/storeHooks';
import CartItem from './CartItem/CartItem';

function CartItems() {
  const data = useAppSelector((state) => state.cart.list);

  return (
    <div className={styles.wrapper}>
      {data.map(
        (
          {
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
          },
          index
        ) => {
          return (
            <CartItem
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              category={category}
              brand={brand}
              discountPercentage={discountPercentage}
              rating={rating}
              stock={stock}
              thumbnail={thumbnail}
              count={count}
              productIndex={index + 1}
            />
          );
        }
      )}
    </div>
  );
}

export default CartItems;
