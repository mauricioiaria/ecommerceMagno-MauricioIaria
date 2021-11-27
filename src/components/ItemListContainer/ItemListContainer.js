import React from 'react'
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

    return (
        <div className="itemContainer">
            <ItemList />
        </div>
    );
};

export default ItemListContainer;