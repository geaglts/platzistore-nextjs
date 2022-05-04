import React from 'react';
import '@styles/MyOrders.scss';
import Order from '@components/Order';

const MyOrders = () => {
    return (
        <div className="MyOrders">
            <div className="MyOrders-container">
                <h1 className="title">My orders</h1>
                <div className="MyOrders-content">
                    <Order />
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
