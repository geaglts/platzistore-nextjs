import React, { useContext } from 'react';
import Image from 'next/image';

import iconAddToCart from '@icons/bt_add_to_cart.svg';

import AppContext from '@context/AppContext';

import styles from '@styles/ProductCart.module.scss';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className={styles.ProductCard}>
            {new RegExp(/https?:\/\/.*/).test(product.images[0]) && (
                <Image
                    loader={() => product.images[0]}
                    src={product.images[0]}
                    unoptimized={true}
                    alt="dummy product"
                    className={styles['ProductCard-img']}
                    width="100%"
                    height="100%"
                    layout="responsive"
                />
            )}
            <div className={styles['ProductCard-info']}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)} aria-hidden>
                    <Image className={styles.addToCart} src={iconAddToCart} alt="add to cart button" />
                </figure>
            </div>
        </div>
    );
};

export default ProductCard;
