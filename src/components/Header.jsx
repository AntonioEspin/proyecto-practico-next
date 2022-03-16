import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCarIcon from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [addMenu, setAddMenu] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const { state } = useContext(AppContext);

  const handleMenu = () => {
    setAddMenu(!addMenu);
  };
  return (
    <nav className={styles.Nav}>
      <img src={menu.src} alt="icon_menu" className={styles.menu} />

      <div className={styles['navbar-left']}>
        <Link href="/" passHref>
          <Image src={logo} alt="logo" className={styles['nav-logo']} priority />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleMenu} aria-hidden="true">
            myemail@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrder(!toggleOrder)} aria-hidden="true">
            <Image src={shoppingCarIcon} alt="icon_shopping_cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {addMenu && <Menu />}
      {toggleOrder && <MyOrder />}
    </nav>
  );
};

export default Header;
