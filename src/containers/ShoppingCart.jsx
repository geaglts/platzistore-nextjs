import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import FormButton from '@components/FormButton';

import iconArrow from '@icons/flechita.svg';
import ShoppingCartProduct from '@components/ShoppingCartProduct';

import AppContext from '@context/AppContext';

import styles from '@styles/ShoppingCart.module.scss';

const ShoppingCart = ({ close }) => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <section className={styles.ShoppingCartContainer}>
            <aside className={styles.ShoppingCart}>
                <div className={styles['ShoppingCart-content']}>
                    <div className={styles['title-container']}>
                        <button className={styles['close-shopping-cart']} onClick={close}>
                            <Image src={iconArrow} alt="arrow" />
                        </button>
                        <h1 className={styles.title}>Shopping cart</h1>
                    </div>
                    {state.cart.map((product, key) => (
                        <ShoppingCartProduct product={product} key={`ShoppingCartProduct-${key}`} />
                    ))}
                    <div className={styles['shopping-total']}>
                        <p>Total</p>
                        <p>${sumTotal()}</p>
                    </div>
                    <Link href="/checkout">
                        <span>
                            <FormButton label="Checkout" classes={[styles['checkout-button']]} onClick={close} />
                        </span>
                    </Link>
                </div>
            </aside>
        </section>
    );
};

export default ShoppingCart;
