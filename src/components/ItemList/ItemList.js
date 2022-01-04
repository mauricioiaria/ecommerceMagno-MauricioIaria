//Components
import Item from '../Item/Item';

//Css
import '../ItemListContainer/ItemListContainer.css';



const ItemList = ({ dataProducts }) => {


    return (

        <div className='itemStyle'>
            {dataProducts.map((datos) => {
                return <Item data={datos} key={datos.id} />;
            })}
        </div>
    );

};

export default ItemList
