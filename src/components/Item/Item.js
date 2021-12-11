import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item = ({ data }) => (
    <Link to={`/detail/${data.char_id}`}>
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
        </Card>
    </Link>
);

export default Item