import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
        {products.map((product) => (
          <div key={product.id}>
             <h3>{product.title}</h3>
            <p>{product.price} USD</p>
            <img src={product.image} alt={product.title} width="20%" />
            <br />
            <Link to={`/product/${product.id}`}>More Details</Link>

          </div>
        ))}
    </div>
  );
};

export default Home;