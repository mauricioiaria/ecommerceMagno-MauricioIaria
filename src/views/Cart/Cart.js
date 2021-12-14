import React, { useContext } from 'react'
import { CartContext } from '../../components/Context/UseContext'

const Cart = () => {
    const { items, removeItem, clearItems } = useContext(CartContext);

    return (
        <>
            <div>
                {
                    items.map((item) => (

                        <div key={item.char_id}>
                            <h1>{item.name}</h1>
                            <h2>{item.nickname}</h2>
                            <h3>{item.birthday}</h3>
                            <h4 onClick={() => removeItem(item.char_id)}>BORRAR PRODUCTO</h4>
                        </div>
                    ))
                }
            </div>
            <h4 onClick={(item) => clearItems(item.char_id)}>VACIAR CARRITO</h4>
        </>
    )
}

export default Cart
