import React from "react";

function Product(props){
    const {data} = props;
    return(
        <div>
            <p>{data.title}</p>
            <p>$ {data.price}</p>
            <button>Detalle</button>
        </div>
    )
}
export default Product