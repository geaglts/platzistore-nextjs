import React, { useContext } from 'react';
import Image from 'next/image';

import ShoppingCartOrder from '@components/ShoppingCartOrder';

import iconClose from '@icons/icon_close.png';

import AppContext from '@context/AppContext';

import styles from '@styles/ShoppingCartProduct.module.scss';

const ShoppingCartProduct = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (product) => {
        removeFromCart(product);
    };

    return (
        <div className={styles.ShoppingCartProduct}>
            <ShoppingCartOrder product={product} />
            <button className={styles['delete-product-button']} onClick={() => handleRemove(product)}>
                <Image src={iconClose} alt="delete product" />
            </button>
        </div>
    );
};

export default ShoppingCartProduct;
