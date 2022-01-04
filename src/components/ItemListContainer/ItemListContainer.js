import React, { useState, useEffect } from 'react'

//CSS
import '../ItemListContainer/ItemListContainer.css';
import '../Spinner/Spinner.css'

//Components
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner'


//Firebase

import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


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
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])

    return (
        <>
            {isLoading ? (
                <div className='spinner'>
                    <Spinner />
                </div>
            ) : (<div className='container'>
                <ItemList dataProducts={products} />
            </div>)
            }

        </>
    );

};

export default ItemListContainer;