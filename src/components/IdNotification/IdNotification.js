import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const idNotification = ({ msg }) => (

  <Message size="huge" icon negative>
    <Icon name="barcode" />
    <Message.Content>
      <Message.Header>Numero de Orden de Compra Generada :</Message.Header>
      {msg.id}
    </Message.Content>
  </Message>
);

export default idNotification;
