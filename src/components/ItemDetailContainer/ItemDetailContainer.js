import React, { useEffect, useState } from 'react'

//Components
import ItemDetail from '../ItemDetail/ItemDetail';

//Router
import { useParams } from 'react-router-dom';

//Components
import Spinner from '../Spinner/Spinner';

//CSS
import '../Spinner/Spinner.css'

//Firebase

import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where, documentId } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


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
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [idProduct])

    return (
        <>
            {isLoading ? (
                <div className='spinner'>
                    <Spinner />
                </div>
            ) : (
                <div className='itemContainer'>
                    {items.map((items) => {
                        return <ItemDetail item={items} key={items.id} />
                    })}
                </div>)}
        </>
    );
}

export default ItemDetailContainer
