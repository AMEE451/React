import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    let [product, setproduct] = useState({});
    const getProducts = async () => {
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(res.data)
        setproduct(res.data)
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="20%" />
            <h4>Price: {product.price} USD</h4>
            <p>{product.description}</p>
        </div>
    );
};

export default Details;