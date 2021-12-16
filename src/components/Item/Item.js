import React from 'react'
import { Card, Image } from 'semantic-ui-react'
// import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item = ({ data }) => (
    <Link to={`/detail/${data.id}`}>
        <Card>
            <Image src={data.img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{data.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Categoria: {data.category}</span>
                </Card.Meta>
                <Card.Description>
                    <p>{data.description}</p>
                    $ {data.price}
                </Card.Description>
            </Card.Content>
        </Card>
    </Link>
);

export default Item