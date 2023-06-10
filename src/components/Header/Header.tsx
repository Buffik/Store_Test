import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import TextItem from 'src/UI/TextItem/TextItem';
import Logo from 'src/UI/Logo/Logo';
import IconItem from 'src/UI/Icons/IconItem';
import cartIcon from 'assets/icons/cart.svg';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__navigation}>
        <Link to="/">
          <Logo />
        </Link>

        <p className={styles.header__navigation__total}>
          {'Cart total: 0'}
          <span className={styles.header__navigation__total__price}>
            {/* {cartTotalItems ? formatPrice(cartTotalItems) : '...'} */}
          </span>
        </p>
        <Link className={styles.header__navigation__cart} to="/cart">
          <IconItem linkToIcon={cartIcon} alt={'Cart'} />
          <TextItem className={styles.header__navigation__cart__items} as="p">
            1
          </TextItem>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
