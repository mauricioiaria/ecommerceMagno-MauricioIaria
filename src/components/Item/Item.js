import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';



const Item = ({ data }) => (
    <Card>
        <Image src={data.img} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>
                <span className='date'>Categoria: {data.birthday}</span>
            </Card.Meta>
            <Card.Description>
                $ {data.nickname}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <ItemCount stock={5} initial={0} />
        </Card.Content>
    </Card>
);

export default Item