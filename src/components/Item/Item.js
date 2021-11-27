import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({ data }) => (
    <Card>
        <Image src={data.img} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{data.birthday}</span>
            </Card.Meta>
            <Card.Description>
                ALIAS: {data.nickname}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <ItemCount stock={5} initial={1} />
        </Card.Content>
    </Card>
);

export default ItemDetail