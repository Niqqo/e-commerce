import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import './item.css';

function Item(props) {
  let urlDetail = `/detalle/${props.id}`

  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4 className="priceTag">${props.price} </h4>
        <Link to= {urlDetail}>
          <Button>Ver más!</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;





























// import React from 'react';
// import Button from "../Button/Button";
// import './item.css';

// function Item(props) {
//   return (
//     <div className = "card">
//       <div className = "card-img">
//         <img src={props.imgurl} alt="Product img" />
//       </div>
//       <div className="card-detail">
//         <h2>{props.title}</h2>
//         <p>{props.detail}</p>
//         <h4 className="priceTag">${props.price} </h4>
//         <Button>Ver más!</Button>
//       </div>
//     </div>
//   );
// }

// export default Item;