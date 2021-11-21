import React from 'react'
import '../ItemListContainer/ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {

    return (
        <div className="itemContainer">
            <ItemCount />
        </div>
    );
};

export default ItemListContainer;