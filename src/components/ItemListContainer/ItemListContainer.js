import React, { useState, useEffect } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            axios('https://www.breakingbadapi.com/api/characters').then((res) => {
                setProducts(res.data)
            })

        }, 1500);

    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('https://www.breakingbadapi.com/api/characters')
    //             .then((response) => response.json())
    //             .then((json) => setProducts(json));
    //     }, 3000);

    // }, []);

    return (

        <div className='container'>
            <ItemList dataProducts={products} />
        </div>
    );

};

export default ItemListContainer;