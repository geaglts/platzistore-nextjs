import React from 'react';

import ProductCard from '@components/ProductCard';

import useGetProducts from '@hooks/useGetProducts';

import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
    const { loading, products } = useGetProducts(process.env.NEXT_PUBLIC_API_URL);
    return (
        <div className={styles.ProductList}>
            {!loading && products.map((product, key) => <ProductCard product={product} key={key} />)}
        </div>
    );
};

export default ProductList;
