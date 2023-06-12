import SiteContainer from 'src/UI/Layouts/SiteContainer/SiteContainer';
import styles from './Cart.module.scss';
import SideBar from './SideBar/SideBar';
import CartItems from './CartItems/CartItems';
import { useAppSelector } from 'src/hooks/storeHooks';
import { Link } from 'react-router-dom';
import emptyCartImg from 'assets/icons/emptyCart.svg';
import CartContainer from 'src/UI/Layouts/CartContainer/CartContainer';

function Cart() {
  const data = useAppSelector((state) => state.cart.list);

  if (!data.length) {
    return (
      <SiteContainer>
        <section className={styles.empty__wrapper}>
          <img className={styles.empty__img} src={emptyCartImg} alt="" />
          <h1 className={styles.empty__title}>Cart is empty</h1>
          <Link to="/" className={styles.empty__link}>
            Back to main
          </Link>
        </section>
      </SiteContainer>
    );
  }
  return (
    <CartContainer>
      <div className={styles.wrapper}>
        <CartItems />
        <SideBar />
      </div>
    </CartContainer>
  );
}

export default Cart;
