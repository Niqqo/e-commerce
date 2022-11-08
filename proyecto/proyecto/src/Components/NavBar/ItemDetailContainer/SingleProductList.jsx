import React from 'react'
import Item from '../Item/Item';

function SingleProductList(props) {
    return (
        <div>
            {props.productsList((product) => (
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

export default SingleProductList;