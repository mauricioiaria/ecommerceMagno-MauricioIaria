import React, { useState, useEffect } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://www.breakingbadapi.com/api/characters')
                .then((response) => response.json())
                .then((json) => setProducts(json));
        }, 3000);

    }, []);

    return (

        <div className='itemContainer'>
            <ItemList dataProducts={products} />
        </div>
    );

};

export default ItemListContainer;