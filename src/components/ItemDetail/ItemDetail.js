import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const ItemDetail = ({ item }) => (

    <Card>
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
    </Card>

)




export default ItemDetail
