import React, { useState, useContext } from 'react';
import Image from 'next/image';

import ProfileMenu from '@components/ProfileMenu';
import ShoppingCart from '@containers/ShoppingCart';

import iconMenu from '@icons/icon_menu.svg';
import logoYardSale from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

import AppContext from '@context/AppContext';

import styles from '@styles/Header.module.scss';

const Header = () => {
    const { state } = useContext(AppContext);
    const [toggle, setToggle] = useState(false);
    const [toggleOrder, setToggleOrder] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleToggleOrder = () => {
        setToggleOrder(!toggleOrder);
    };

    return (
        <nav className={styles.navbar}>
            <Image src={iconMenu} alt="menu" className={styles.menu} />
            <section className={styles['navbar-left']}>
                <Image src={logoYardSale} alt="logo" className={styles['navbar-logo']} />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </section>
            <section className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']} onClick={handleToggle}>
                        geaglts@example.com
                    </li>
                    <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrder}>
                        <Image src={iconShoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </section>
            {toggle && <ProfileMenu />}
            {toggleOrder && <ShoppingCart close={handleToggleOrder} />}
        </nav>
    );
};

export default Header;
