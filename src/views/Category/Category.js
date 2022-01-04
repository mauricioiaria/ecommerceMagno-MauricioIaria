import React, { useState, useEffect } from 'react'

//CSS
import '../../components/ItemListContainer/ItemListContainer.css'

//COMPONENST
import ItemList from '../../components/ItemList/ItemList';
import Spinner from '../../components/Spinner/Spinner';


//ROUTER
import { useParams } from 'react-router-dom';


//CSS
import '../../components/Spinner/Spinner.css'

//Firebase

import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where } from "firebase/firestore";



const Category = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    let category = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "tools"), where('category', '==', category.category));
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
        }, 1500);
    }, [category.category])

    return (
        <>
            {isLoading ? (
                <div className='spinner'>
                    <Spinner />
                </div>
            ) : (
                <div className='container'>
                    <ItemList dataProducts={products} />
                </div>)}
        </>
    );

};

export default Category;