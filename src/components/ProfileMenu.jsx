import React from 'react';
import Link from 'next/link';
import styles from '@styles/ProfileMenu.module.scss';

const ProfileMenu = () => {
    return (
        <div className={styles.ProfileMenu}>
            <ul>
                <li>
                    <Link href="/" className="title">
                        My orders
                    </Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
                <li>
                    <Link href="/">Sign out</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;
