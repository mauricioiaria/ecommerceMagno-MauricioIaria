import React, { useState } from "react";

//css
import "../ItemCount/ItemCount.css";

//Librerias
import swal from 'sweetalert';
import { Button } from 'semantic-ui-react'


const ItemCount = ({ item, stock, initial, onAdd, addItem }) => {


    const [count, setCount] = useState(initial);

    const sumaItem = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            swal('SUPERASTE EL STOCK DISPONIBLE')
        };
    }


    const restaItem = () => {
        if (count > initial) {
            setCount(count - 1)
            swal(`PRODUCTO ELIMINADO`)
        }
    };


    return (
        <div className='CounterSection'>
            <div className='ui three buttons'>
                <Button negative onClick={restaItem}>-</Button>
                <div className='ui basic  button'>{count}</div>
                <Button positive onClick={sumaItem}>+</Button>
            </div>
            <div className='separacion'>
                {
                    count > 0 ?
                        // eslint-disable-next-line no-unused-expressions
                        <Button className='centrado' active onClick={() => { onAdd(count), addItem(item, count) }}>Agregar al Carrito</Button>
                        :
                        <Button className='centrado' attached >Agregue su producto</Button>
                }

            </div>
        </div>
    );

}

export default ItemCount