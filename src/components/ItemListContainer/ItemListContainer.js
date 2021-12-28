import React, { useState, useEffect } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


//Firebase

import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "tools"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setProducts(docs);
        };
        getProducts();
    }, [])

    return (

        <div className='container'>
            <ItemList dataProducts={products} />
        </div>
    );

};

export default ItemListContainer;