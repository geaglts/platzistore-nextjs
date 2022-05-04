import React from 'react';
import '@styles/ProductList.scss';
import ProductCard from '@components/ProductCard';

import useGetProducts from '@hooks/useGetProducts';

/**
 * Docs de la API 👉 https://api.escuelajs.co/docs/
 * API para desarrollo 👉 https://api.escuelajs.co/api/v1/
 */

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const { loading, products } = useGetProducts(API);
    return <div className="ProductList">{!loading && products.map((product, key) => <ProductCard product={product} key={key} />)}</div>;
};

export default ProductList;
