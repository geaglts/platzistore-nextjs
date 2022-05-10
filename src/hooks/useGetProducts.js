import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            const response = await axios.get(API);
            setProducts(response.data);
            setLoading(false);
        };
        loadProducts();
        return () => {};
    }, [API]);

    return { products, loading };
};

export default useGetProducts;
