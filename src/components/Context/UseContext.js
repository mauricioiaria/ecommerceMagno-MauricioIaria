import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])


    const isInCart = (char_id) => {

        const itemsDuplicado = items.find(item => item.char_id === char_id);
        return itemsDuplicado;

    }

    const addItem = (item, count) => {

        isInCart(item.char_id)
            ?
            setItems(items.map((prod) => {
                if (prod.char_id === item.char_id) {
                    prod.count += count;
                }
                return prod
            }))
            :
            setItems([...items, { id: item.char_id, name: item.name, price: item.nickname, count: count }])
    }

    const removeItem = (char_id) => {
        setItems(items.filter(item => item.char_id !== char_id))
    }

    const clearItems = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems }}>
            {children}
        </CartContext.Provider>

    )

}

