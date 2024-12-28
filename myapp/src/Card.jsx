import React from "react";

const Card=({title,price,image})=>{
    return(
        <div>
            <img src={image} alt="" height="200px"/>
            <h2>{title}</h2>
            <p>{price}</p>
            <button>Buy</button>
        </div>
    )
}
export default Card