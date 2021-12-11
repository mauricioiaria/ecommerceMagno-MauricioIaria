import React, { useState } from "react";
import "../ItemCount/ItemCount.css";
import swal from 'sweetalert';
import { Button } from 'semantic-ui-react'


const ItemCount = ({ stock, initial }) => {


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

    const onAdd = () => {
        swal(`AGREGASTE ${count}`)
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
                        <Button className='centrado' active onClick={() => onAdd(count)}>Agregar al Carrito</Button>
                        :
                        <Button className='centrado' attached >Ingrese Cantidad</Button>
                }
                {/* <Button className='centrado' active onClick={onAdd}>Agregar al Carrito</Button> */}
            </div>
        </div>
    );

}

export default ItemCount