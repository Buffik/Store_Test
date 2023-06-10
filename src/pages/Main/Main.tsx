import { useAppDispatch, useAppSelector } from 'src/hooks/storeHooks';
import styles from './Main.module.scss';
import ProductsList from './Product/ProductList/ProductList';
import { fetchProducts } from 'src/store/productSlice';
import { useEffect } from 'react';
import SiteContainer from 'src/UI/Layouts/Container/SiteContainer';
import LoadingSpinner from 'src/UI/LoadingSpinner/LoadingSpinner';

function Main() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.products);
  console.log(status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <SiteContainer>
      {status === 'loading' ? <LoadingSpinner /> : <ProductsList />}
    </SiteContainer>
  );
}

export default Main;
