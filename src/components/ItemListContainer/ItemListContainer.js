import React from 'react'
import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = (props) => {

    return (
        <div className="itemContainer">
            <p> {props.greeting} </p>
        </div>
    );
};

export default ItemListContainer;