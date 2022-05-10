import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NotFoundImage from '@icons/not_found.svg';

import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
    return (
        <section className={styles.container}>
            <div className={styles.notFoundImage}>
                <Image src={NotFoundImage} alt="Pagina no encontrada" />
            </div>
            <p className={styles.notFoundMessage}>404: Pagina no encontrada.</p>
            <Link href="/">
                <span className={styles.backToHome}>Regresar al inicio</span>
            </Link>
        </section>
    );
};

export default NotFound;
