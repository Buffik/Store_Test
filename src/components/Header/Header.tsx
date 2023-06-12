import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import TextItem from 'src/UI/TextItem/TextItem';
import Logo from 'src/UI/Logo/Logo';
import IconItem from 'src/UI/Icons/IconItem';
import cartIcon from 'assets/icons/cart.svg';
import { useAppSelector } from 'src/hooks/storeHooks';
import formatPrice from 'src/utils/formatPrice';
import { countItems, countPrice } from 'src/utils/countItems';

function Header() {
  const data = useAppSelector((state) => state.cart.list);

  const cartTotalItems = countItems(data);

  const fullPrice = countPrice(data);
  return (
    <header className={styles.header}>
      <nav className={styles.header__navigation}>
        <Link to="/">
          <Logo />
        </Link>

        <TextItem as="p" className={styles.header__navigation__total}>
          <>
            {'Cart total: '}
            <TextItem
              as="span"
              className={styles.header__navigation__total__price}
            >
              {cartTotalItems ? formatPrice(fullPrice) : '...'}
            </TextItem>
          </>
        </TextItem>
        <Link className={styles.header__navigation__cart} to="/cart">
          <IconItem linkToIcon={cartIcon} alt={'Cart'} />
          <TextItem className={styles.header__navigation__cart__items} as="p">
            {cartTotalItems}
          </TextItem>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
