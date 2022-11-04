import React from 'react';
import './item.css';

function Item(props) {
  return (
    <div classname = "card">
        <h2>{props.title}</h2>
    </div>
  );
}

export default Item;