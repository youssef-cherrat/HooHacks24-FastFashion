import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/fetchProducts';

function ProductsList() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;


    return (
        <div>
            <h1>Alternative Fashion Items</h1>
            <ul>
                {data?.map(item => ( 
                    <li key={item.product_id}>
                        <img src={item.thumbnail} alt={item.title} style={{ width: '100px' }} />
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsList;
