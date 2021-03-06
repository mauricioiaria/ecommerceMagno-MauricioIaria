import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { CartContext } from '../Context/UseContext';

function CartWidget() {
    const { items } = useContext(CartContext);

    let itemsInCart = 0;

    // eslint-disable-next-line array-callback-return
    items.map((item) => {
        itemsInCart += item.count;
    });

    return (
      <div className="d-inline-flex p-2 ">
        <div>
          {itemsInCart}
        </div>
        <Icon link name="cart" size="big" color="yellow" />
      </div>
    );
}

export default CartWidget;
