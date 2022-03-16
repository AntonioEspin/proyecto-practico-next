import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import iconClose from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeCart } = useContext(AppContext);

  const deleteItem = (item) => {
    removeCart(item);
  };
  return (
    <div className={styles.OrderItem}>
      <figure>{product?.images[0] && <Image src={product?.images[0]} alt={product?.title} width="100" height="100" />}</figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image
        src={iconClose}
        alt="close"
        onClick={() => {
          deleteItem(product);
        }}
        width="15"
        height="15"
      />
    </div>
  );
};

export default OrderItem;
