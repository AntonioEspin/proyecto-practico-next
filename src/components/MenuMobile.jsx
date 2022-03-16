import React from 'react';
import Link from 'next/link';
import styles from '@styles/MenuMobile.module.scss';

const MenuMobile = () => {
  return (
    <div className={styles['mobile-menu']}>
      <ul>
        <li>
          <Link href="/">CATEGORIES</Link>
        </li>
        <li>
          <Link href="/">All</Link>
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

      <div>
        <ul>
          <li>
            <Link href="/">My orders</Link>
          </li>
          <li>
            <Link href="/">My account</Link>
          </li>
        </ul>

        <ul className={styles['info-user']}>
          <li>
            <Link href="/" className={styles.email}>
              platzi@example.com
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['sing-out']}>
              Sing out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
