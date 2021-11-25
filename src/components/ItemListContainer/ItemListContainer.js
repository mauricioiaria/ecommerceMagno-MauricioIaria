import React from 'react'
import '../ItemListContainer/ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {

    return (
        <div className="itemContainer">
            <ItemCount stock={5} initial={1} />
        </div>
    );
};

export default ItemListContainer;