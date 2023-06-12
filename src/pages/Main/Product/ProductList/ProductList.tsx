import { useState } from 'react';
import styles from './ProductList.module.scss';
import { useAppSelector } from 'src/hooks/storeHooks';
import ProductItem from '../ProductItem/ProductItem';
import sortProducts from 'src/utils/sortProducts';
import MainPageFilter from 'src/components/Filters/MainPageFIlter/MainPageFilter';

export default function ProductsList() {
  const { list } = useAppSelector((state) => state.products);

  const [sort, setSort] = useState('default');

  const data = sortProducts(list.products, sort);

  return (
    <section className={styles.wrapper}>
      <div className={styles.filter}>
        <MainPageFilter sort={sort} setSort={setSort} />
      </div>
      <div className={styles.products}>
        {data.map(
          ({
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
          }) => {
            return (
              <ProductItem
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
              />
            );
          }
        )}
      </div>
    </section>
  );
}
