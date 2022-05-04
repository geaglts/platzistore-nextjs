import React from 'react';
import styles from '@styles/ProfileMenu.module.scss';

const ProfileMenu = () => {
    return (
        <div className={styles.ProfileMenu}>
            <ul>
                <li>
                    <a href="/" className="title">
                        My orders
                    </a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;
