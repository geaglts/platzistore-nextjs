import React from 'react';
import '@styles/MobileMenuLink.scss';

const MobileMenuLink = ({ label = '', linkClass = '', to = '/' }) => (
    <li>
        <a href={to} className={linkClass}>
            {label}
        </a>
    </li>
);

export default MobileMenuLink;
