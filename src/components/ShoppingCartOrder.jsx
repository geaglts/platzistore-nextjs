import React from 'react';
import Image from 'next/image';

import styles from '@styles/ShoppingCartOrder.module.scss';

const ShoppingCartOrder = ({ product }) => {
    return (
        <div className={styles.ShoppingCartOrder}>
            <figure>
                <Image src={product.images[0]} alt="Imagen de el producto" />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ShoppingCartOrder;
