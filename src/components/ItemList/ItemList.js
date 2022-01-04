// Components
import Item from '../Item/Item';

// Css
import '../ItemListContainer/ItemListContainer.css';

function ItemList({ dataProducts }) {
    return (

      <div className="itemStyle">
        {dataProducts.map((datos) => <Item data={datos} key={datos.id} />)}
      </div>
    );
}

export default ItemList;
