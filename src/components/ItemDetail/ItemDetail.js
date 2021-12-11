import React, { useState } from 'react'
import { Image, Grid, Container, Segment, Button } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'
import swal from 'sweetalert';
import { Link } from 'react-router-dom';




const ItemDetail = ({ item }) => {

    const [add, setAdd] = useState(false)
    const onAdd = (count) => {
        setAdd(!add)
        swal(`AGREGASTE ${count} PRODUCTOS A TU CARRITO`)

    }

    return (

        <Container className='fondo'>

            <Grid columns={2} >
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <Image src={item.img} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment textAlign='center'>
                            <span className='date'>PRODUCTO: {item.name}</span>
                        </Segment>
                        <Segment textAlign='center'>
                            <span className='date'>Categoria: {item.birthday}</span>
                        </Segment>
                        <Segment textAlign='center'>
                            <span className='date'>PRECIO $: {item.nickname}</span>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid columns={1}>
                <Grid.Row >
                    <div className='centrado' >
                        {
                            add ?
                                ""
                                :
                                <ItemCount stock={5} initial={0} onAdd={onAdd} />
                        }

                        <Button.Group>
                            <Link to='/cart'>
                                <Button className='centrado blue' active >FINALIZAR COMPRA</Button>
                            </Link>
                            <Button.Or text={'O'} />
                            <Link to='/Home'>
                                <Button positive>SEGUIR COMPRANDO</Button>
                            </Link>
                        </Button.Group>

                    </div>
                </Grid.Row>

            </Grid>

        </Container>
    )

}


<Button.Group>
    <Button>Cancel</Button>
    <Button.Or />
    <Button positive>Save</Button>
</Button.Group>



export default ItemDetail
