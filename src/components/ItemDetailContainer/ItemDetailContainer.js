import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

//Firebase

import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where, documentId } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);

    let idProduct = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "tools"), where(documentId(), '==', idProduct.id));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setItems(docs);
        };
        getProducts();
    }, [idProduct])

    return (
        <>
            <div className='itemContainer'>
                {items.map((items) => {
                    return <ItemDetail item={items} key={items.id} />
                })}
            </div>
        </>
    );
}

export default ItemDetailContainer
