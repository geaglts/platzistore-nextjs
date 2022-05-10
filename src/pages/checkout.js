import React from 'react';
import Head from 'next/head';
import ShoppingCartOrder from '@components/ShoppingCartOrder';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    return (
        <>
            <Head>
                <title>PlatziStore | Checkout</title>
            </Head>
            <div className={styles.MyOrder}>
                <div className={styles['MyOrder-container']}>
                    <h1 className={styles.title}>My order</h1>
                    <div className={styles['MyOrder-content']}>
                        <div className={styles['shipping-total']}>
                            <p>
                                <span>04.25.2021</span>
                                <span>6 articles</span>
                            </p>
                            <p>$560.00</p>
                        </div>
                        <ShoppingCartOrder />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrder;
