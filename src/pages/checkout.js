import React from 'react';
import styles from '@styles/MyOrder.module.scss';
import ShoppingCartOrder from '@components/ShoppingCartOrder';

const MyOrder = () => {
    return (
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
    );
};

export default MyOrder;
