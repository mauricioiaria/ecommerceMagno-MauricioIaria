import React, { useState, useEffect } from 'react'
import '../../components/ItemListContainer/ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


//Firebase

import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where } from "firebase/firestore";



const Category = () => {

    const [products, setProducts] = useState([]);

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
    }, [category.category])

    return (

        <div className='container'>
            <ItemList dataProducts={products} />
        </div>
    );

};

export default Category;