import React from 'react';
import Image from 'next/image';
import '@styles/Order.scss';

import iconArrow from '@icons/flechita.svg';

const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <span>
                <Image src={iconArrow} alt="arrow" />
            </span>
        </div>
    );
};

export default Order;
