import React, { useContext, useState } from "react";
import { Image, Grid, Container, Segment, Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";

import { CartContext } from "../Context/UseContext";

const ItemDetail = ({ item }) => {
    const [add, setAdd] = useState(false);
    const onAdd = (count) => {
        setAdd(!add);
        swal({
            title: `${item.title} Agregado!`,
            text: `Agregaste ${count} Productos a tu Carrito`,
            icon: "success",
            button: "Continuar Comprando",
        });
    };

    const { addItem } = useContext(CartContext);

    return (
        <Container className="fondo">
            <Grid columns={2}>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment >
                            <Image src={item.img} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment inverted color='blue' textAlign="center">
                            <span >Producto: {item.title}</span>
                        </Segment>
                        <Segment textAlign="center">
                            <span >Categoria: {item.category}</span>
                        </Segment>
                        <Segment textAlign="center">
                            <span >Detalles del Producto: {item.description}</span>
                        </Segment>
                        <Segment inverted color='green' tertiary textAlign="center">
                            <span className="price" >PRECIO ARS $: {item.price}</span>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid columns={1}>
                <Grid.Row>
                    <div className="centrado">
                        <ItemCount
                            item={item}
                            stock={item.stock}
                            initial={0}
                            onAdd={onAdd}
                            addItem={addItem}
                        />

                        <Button.Group>
                            <Link to="/cart">
                                <Button className="centrado blue" active>
                                    FINALIZAR COMPRA
                                </Button>
                            </Link>
                            <Button.Or text={"O"} />
                            <Link to="/">
                                <Button positive>SEGUIR COMPRANDO</Button>
                            </Link>
                        </Button.Group>
                    </div>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

<Button.Group>
    <Button>Cancel</Button>
    <Button.Or />
    <Button positive>Save</Button>
</Button.Group>;

export default ItemDetail;
