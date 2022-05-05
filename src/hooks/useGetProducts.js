import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        setLoading(true);
        const response = await axios.get(API);
        setProducts(response.data);
        setLoading(false);
    };

    useEffect(() => {
        loadProducts();
        return () => {};
    }, []);

    return { products, loading };
};

export default useGetProducts;
