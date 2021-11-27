import React, { useEffect, useState } from 'react'
import ItemDetail from '../Item/Item';

const ItemList = () => {

    const [users, setUsers] = useState([]);

    console.log(users);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://www.breakingbadapi.com/api/characters')
                .then((response) => response.json())
                .then((json) => setUsers(json));
        }, 2000);

    }, []);

    return (
        <div className='itemContainer'>
            <div className='itemStyle'>
                {users.map((datos) => {
                    return <ItemDetail data={datos} key={datos.char_id} />;
                })}
            </div>

        </div>
    );
};

export default ItemList
