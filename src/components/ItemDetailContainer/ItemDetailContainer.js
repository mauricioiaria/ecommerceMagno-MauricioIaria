import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);


    let id = useParams();
    let itemId = id.id
    useEffect(() => {

        setTimeout(() => {
            axios(`https://www.breakingbadapi.com/api/characters/${itemId}`).then((res) => setItems(res.data[0]))
        }, 1000);
    }, [itemId]);
    return (
        <>
            <div className='itemContainer'>
                <ItemDetail item={items} />
            </div>

        </>
    );
}

export default ItemDetailContainer
