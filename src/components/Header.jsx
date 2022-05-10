import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                <Link href="/">
                    <span>
                        <Image src={logoYardSale} alt="logo" className={styles['navbar-logo']} />
                    </span>
                </Link>
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </section>
            <section className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']} onClick={handleToggle} aria-hidden>
                        geaglts@example.com
                    </li>
                    <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrder} aria-hidden>
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
