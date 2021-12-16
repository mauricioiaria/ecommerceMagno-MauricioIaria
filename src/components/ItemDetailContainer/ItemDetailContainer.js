import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

//Firebase

import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);

    let idProduct = useParams();

    const productIdFilter = items.filter((producto) => { return producto.id === idProduct.id })

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "tools"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setItems(docs);
        };
        getProducts();
    }, [])

    return (
        <>
            <div className='itemContainer'>
                {productIdFilter.map((items) => {
                    return <ItemDetail item={items} key={items.id} />
                })}
            </div>
        </>
    );
}

export default ItemDetailContainer
