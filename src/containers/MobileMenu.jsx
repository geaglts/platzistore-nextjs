import React from 'react';
import '@styles/MobileMenu.scss';
import MobileMenuLink from '@components/MobileMenuLink';

const MobileMenu = () => {
    return (
        <div className="MobileMenu">
            <ul>
                <MobileMenuLink label="CATEGORIES" />
                <MobileMenuLink label="All" />
                <MobileMenuLink label="Clothes" />
                <MobileMenuLink label="Electronics" />
                <MobileMenuLink label="Furnitures" />
                <MobileMenuLink label="Toys" />
                <MobileMenuLink label="Others" />
            </ul>
            <ul>
                <MobileMenuLink label="My orders" />
                <MobileMenuLink label="My account" />
            </ul>
            <ul>
                <MobileMenuLink label="geaglts@gmail.com" linkClass="email" />
                <MobileMenuLink label="Sign out" linkClass="sign-out" />
            </ul>
        </div>
    );
};

export default MobileMenu;
