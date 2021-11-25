import React, { useState } from "react";
import "../ItemCount/ItemCount.css";
import swal from 'sweetalert';


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
        }
    };

    const onAdd = () => {
        swal(`AGREGASTE ${count}`)
    };


    return (
        <div className='CounterSection'>
            <p>CONTADOR : {count} </p>
            <div className='btn-section'>
                <button onClick={sumaItem}>Incrementar</button>
                <button onClick={restaItem}>Disminuir</button>
                <button onClick={onAdd}>Agregar</button>

            </div>

        </div>
    );

}

export default ItemCount