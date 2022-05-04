import React from 'react';
import '@styles/ProductDetail.scss';

import iconClose from '@icons/icon_close.png';
import iconAddToCart from '@icons/bt_add_to_cart.svg';

const dummyImage = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src={iconClose} alt="close product detail" />
            </div>
            <img src={dummyImage} alt="bike" className="ProductDetail-image" />
            <section className="product-info">
                <p className="product-price">$35,00</p>
                <p className="product-name">Bike</p>
                <p className="product-description">With its functional and practical interior, this bike also fulfills a decorative function, adding personality and a retro-vintage aesthetic.</p>
                <button className="primary-button add-to-cart-button">
                    <img src={iconAddToCart} alt="add product to cart" />
                    Add to cart
                </button>
            </section>
        </aside>
    );
};

export default ProductDetail;
