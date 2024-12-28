import React from "react";


const Greeting=({name})=>{
    return(
        <div>
            <h2>{name ? `Hello, ${name}!` : 'Hello, Welcome!'}
            </h2>
        </div>
    )
}

export default Greeting