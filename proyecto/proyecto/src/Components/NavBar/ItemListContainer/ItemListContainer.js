import React, {useState, useEffect } from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import ItemList from './ItemList';
import getItemsFromAPI from '../MockService/mockService';

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]); 

  useEffect(() => {
    getItemsFromAPI().then((itemsDB) => {
      setProductsList(itemsDB);
    });
  }, []);

  return (
    <div>
        <FlexWrapper>
          <ItemList productsList={productsList}/>
        </FlexWrapper>
    </div>
  );
}

export default ItemListContainer

