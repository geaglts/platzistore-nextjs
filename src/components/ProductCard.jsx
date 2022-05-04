import React, { useContext } from 'react';
import '@styles/ProductCart.scss';

import iconAddToCart from '@icons/bt_add_to_cart.svg';

import AppContext from '@context/AppContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className="ProductCard">
            <img src={product.images[0]} alt="dummy product" className="ProductCard-img" />
            <div className="ProductCard-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={iconAddToCart} alt="add to cart button" />
                </figure>
            </div>
        </div>
    );
};

export default ProductCard;
