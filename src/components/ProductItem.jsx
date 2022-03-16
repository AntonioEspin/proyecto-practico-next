import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import styles from '@styles/ProductItem.module.scss';
import btnAddCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleAddCart = (productItem) => {
    addToCart(productItem);
  };

  return (
    <div className={styles.ProductItem}>
      {product.images[0] && <Image src={product.images[0]} alt={product.title} width="240" height="240" />}
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']} onClick={() => handleAddCart(product)} aria-hidden="true">
          {state.cart.includes(product) ? (
            <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={btnAddCart} alt="added to cart" width="35px" height="35px" priority />
          ) : (
            <Image className={(styles['add-to-cart-btn'], styles.pointer)} src={btnAddCart} alt="add to cart" width="35px" height="35px" priority />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
