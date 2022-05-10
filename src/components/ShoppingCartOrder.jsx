import React from 'react';
import Image from 'next/image';

import styles from '@styles/ShoppingCartOrder.module.scss';

const dummyProduct = {
    images: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346276',
    ],
    title: 'Nokia 2002',
    price: '220',
};

const ShoppingCartOrder = ({ product = dummyProduct }) => {
    return (
        <div className={styles.ShoppingCartOrder}>
            <figure>
                <Image
                    loader={() => product.images[0]}
                    src={product.images[0]}
                    unoptimized={true}
                    alt="dummy product"
                    className={styles['ProductCard-img']}
                    width="60px"
                    height="60px"
                    layout="fixed"
                />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ShoppingCartOrder;
