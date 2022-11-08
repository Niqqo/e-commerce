import React from 'react'
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

function itemList(props) {

    return (
        <div>
            {props.productsList.map((product) => (
                <Item
                    key={product.id}
                    title={product.title}
                    detail={product.description}
                    price={product.price}
                    stock={product.stock}
                    imgurl={product.imgurl}
                />
            ))}
        </div>
    )
}

export default itemList