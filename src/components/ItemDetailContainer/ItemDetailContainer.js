import React, { useEffect, useState } from 'react'
// import { Loader } from 'semantic-ui-react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);



    useEffect(() => {
        setTimeout(() => {
            fetch('https://www.breakingbadapi.com/api/characters/1')
                .then((response) => response.json())
                .then((json) => setItems(json));
        }, 1000);

    }, []);

    return (
        <>
            <div className='itemContainer'>
                <div className='itemStyle'>
                    {items.map((datos) => {
                        return <ItemDetail item={datos} />
                    })}
                </div>
            </div>
        </>


    )
}

export default ItemDetailContainer
