import React, { useContext } from 'react'
import "../Cart/Cart.css";
import { CartContext } from '../../components/Context/UseContext'

const Cart = () => {
    const { items, removeItem, clearItems, totalPrice } = useContext(CartContext);

    return (
        <>
            <div className='container'>
                {items.map((item) => (
                    <div key={item.id}>
                        <br></br>
                        <table class="table table-dark table-striped">
                            <thead>
                                <tr className='text-primary'>
                                    <th scope="col">#</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td className='table__productos'>{item.title}</td>
                                    <td className='table__category'> {item.category}</td>
                                    <td className='table__cantidad'>{item.count}</td>
                                    <td className='table__price'>$ {item.price}</td>

                                </tr>
                            </tbody>
                        </table>
                        <button onClick={() => removeItem(item.title)} type="button" class="btn btn-warning">ELIMINAR PRODUCTO</button>
                    </div>))}
            </div>

            <div className=' container d-flex justify-content-evenly'>
                <h3 className="fondoTotal mt-5">TOTAL : $ {totalPrice}</h3>

                <button onClick={(item) => clearItems(item.cod)} type="button" class="btn-lg btn-danger mt-5">VACIAR CARRITO</button>

                <button type="button" class="btn-lg btn-success mt-5">TERMINAR COMPRA</button>

            </div>

        </>
    )
}

export default Cart

