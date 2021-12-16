import React, { useState, useEffect } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
// import axios from 'axios';


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


    // useEffect(() => {
    //     setTimeout(() => {
    //         axios('https://www.breakingbadapi.com/api/characters').then((res) => {
    //             setProducts(res.data)
    //         })

    //     }, 1500);

    // }, []);

    return (

        <div className='container'>
            <ItemList dataProducts={products} />
        </div>
    );

};

export default ItemListContainer;