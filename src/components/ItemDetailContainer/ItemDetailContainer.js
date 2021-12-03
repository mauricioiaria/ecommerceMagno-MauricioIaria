import React, { useEffect, useState } from 'react'
// import { Loader } from 'semantic-ui-react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);



    useEffect(() => {
        setTimeout(() => {
            fetch('https://www.breakingbadapi.com/api/characters')
                .then((response) => response.json())
                .then((json) => setItems(json));
        }, 1000);

    }, []);

    return (
        <>
            <div className='itemContainer'>
                <div className='itemStyle'>
                    {items.map((datos) => {
                        return (
                            <div>
                                <Link to={`/detail/${datos.char_id}`}>
                                    <ItemDetail item={datos} key={datos.char_id} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>


    )
}

export default ItemDetailContainer
