import React, { useContext } from 'react'
import "../Cart/Cart.css";
import { CartContext } from '../../components/Context/UseContext'

const Cart = () => {
    const { items, removeItem, clearItems } = useContext(CartContext);

    return (
        <>
            <div className='container'>
                {items.map((item) => (
                    <div key={item.char_id}>
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
                                    <th scope="row">{item.char_id}</th>
                                    <td className='table__productos'>{item.name}</td>
                                    <td className='table__category'> {item.nickname}</td>
                                    <td className='table__cantidad'>{item.count}</td>
                                    <td className='table__price'>$ {item.nickname}</td>

                                </tr>
                            </tbody>
                        </table>
                        <button onClick={() => removeItem(item.char_id)} type="button" class="btn btn-warning">ELIMINAR PRODUCTO</button>
                    </div>))}
            </div>
            <div className='container'>
                <button onClick={(item) => clearItems(item.char_id)} type="button" class="btn-lg btn-danger mt-5">VACIAR CARRITO</button>
            </div>
        </>
    )
}


/* <Card>
    <Image src={item.img} wrapped ui={false} />
    <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>
            <span className='date'>Categoria: {item.birthday}</span>
        </Card.Meta>
        <Card.Description>
            $ {item.nickname}
        </Card.Description>
    </Card.Content>
</Card> */

export default Cart

