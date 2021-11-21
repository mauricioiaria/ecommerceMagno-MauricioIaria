import React, { useState } from "react";
import "../ItemCount/ItemCount.css";
import swal from 'sweetalert';


const ItemCount = () => {

    const [stock, setStock] = useState(0);

    const handlerCounterUp = () => {
        if (stock < 10) {
            setStock(stock + 1);
        } else {
            swal("Stock Insuficiente")
        }
    };

    const handlerCounterDown = () => {
        if (stock > 0) {
            setStock(stock - 1);
        }
    };

    return (
        <div className='CounterSection'>
            <p>CONTADOR : {stock}</p>
            <div className='btn-section'>
                <button onClick={handlerCounterUp}>Incrementar</button>
                <button onClick={handlerCounterDown}>Disminuir</button>
            </div>

        </div>
    );

}

export default ItemCount