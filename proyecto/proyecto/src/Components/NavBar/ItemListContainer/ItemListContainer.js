import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from '../Item/Item';
import products from '../Data/product';

function ItemListContainer() {
  return (
    <div>
        <FlexWrapper>

          <Item 
          price={200} 
          title="Producto 1"
          imgurl="https://www.pixelstalk.net/wp-content/uploads/2016/05/Coffee-Wallpapers-HD-Free-Download.jpg"/>

          <Item 
          price={350} 
          title="Producto 2" 
          imgurl="https://www.xtrafondos.com/wallpapers/taza-de-cafe-4307.jpg"/>

          <Item 
          price={950} 
          title="Producto 2" 
          imgurl="https://images3.alphacoders.com/941/94135.jpg"/>

        </FlexWrapper>
    </div>
  );
}

export default ItemListContainer