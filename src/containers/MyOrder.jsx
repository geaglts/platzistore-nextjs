import React from 'react';
import '@styles/MyOrder.scss';
import ShoppingCartOrder from '@components/ShoppingCartOrder';

const MyOrder = () => {
    return (
        <div className="MyOrder">
            <div className="MyOrder-container">
                <h1 className="title">My order</h1>
                <div className="MyOrder-content">
                    <div className="shipping-total">
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
