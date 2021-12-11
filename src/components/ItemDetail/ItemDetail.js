import React from 'react'
import { Image, Grid, Container, Segment } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'


const ItemDetail = ({ item }) => (

    <Container className='fondo'>

        <Grid columns={3} divided>
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
                <Grid.Column>
                    <Segment className='centrado' >
                        <ItemCount stock={5} initial={0} />
                    </Segment>

                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Container>

)




export default ItemDetail
