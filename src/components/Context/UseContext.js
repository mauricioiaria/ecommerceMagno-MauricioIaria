import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const isInCart = (title) => {
        const itemsDuplicado = items.find((item) => item.title === title);
        return itemsDuplicado;
    };

    const addItem = (item, count) => {
        isInCart(item.title)
            ? setItems(items.map((prod) => {
                if (prod.title === item.title) {
                    prod.count += count;
                }
                return prod;
            }))
            : setItems([...items, {
 id: item.cod, title: item.title, category: item.category, price: item.price, count,
}]);
    };

    const removeItem = (title) => {
        setItems(items.filter((item) => item.title !== title));
    };

    const clearItems = () => {
        setItems([]);
    };

    const totalPrice = items.reduce((prev, item) => prev += (item.count * item.price), 0);

    return (
      <CartContext.Provider value={{
 items, addItem, removeItem, clearItems, totalPrice,
}}
      >
        {children}
      </CartContext.Provider>

    );
}
