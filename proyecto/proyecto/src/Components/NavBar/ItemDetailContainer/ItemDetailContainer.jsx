import React, {useState, useEffect} from 'react'
import Button from "../Button/Button";
import { getSingleItemFromAPI } from '../MockService/mockService';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getSingleItemFromAPI().then((itemsDB) => {
            setProduct(itemsDB);
        });
    }, []);

    return ( 
    <div className="card">
            <div className="card-img">
                <img src={product.imgurl} alt="Product img" />
            </div>
            <div className="card-detail">
                <h2>{product.title}</h2>
                <p>{product.detail}</p>
                <h4 className="priceTag">${product.price} </h4>
                <Button>Ver más!</Button>
            </div>
        </div>
    ); 
}

export default ItemDetailContainer;

