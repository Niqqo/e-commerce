import React, {useState, useEffect } from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import ItemList from './ItemList';
import getItemsFromAPI, { getItemsFromAPIByCategory } from '../MockService/mockService';
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { categoryId } = useParams()


  useEffect(() => {
    if (categoryId)
    getItemsFromAPIByCategory(categoryId).then((itemsDB) => {
      setProductsList(itemsDB);
    });
    else{
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB);
    }); 
  }
  }, [categoryId]);

  return (
    <div>
        <FlexWrapper>
          <ItemList productsList={productsList}/>
        </FlexWrapper>
    </div>
  );
}

export default ItemListContainer

