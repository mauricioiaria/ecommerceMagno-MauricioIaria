import Item from '../Item/Item';
import '../ItemListContainer/ItemListContainer.css';



const ItemList = ({ dataProducts }) => {


    return (

        <div className='itemContainer'>
            <div className='itemStyle'>
                {dataProducts.map((datos) => {
                    return <Item data={datos} key={datos.id} />;
                })}
            </div>
        </div>
    );

};

export default ItemList
