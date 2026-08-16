import { useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let resp = await fetch("https://dummyjson.com/products");
    let data = await resp.json();
    console.log(data.products);
    setProducts(data.products);
  };
  return (
    <div>
      <h1>Fetch Products from an ApI and display it</h1>
      <button onClick={fetchProducts}>Get Produccts</button>
      {products.map((ele) => {
        return (
          <div key={ele.id}>
            <img src={ele.thumbnail} alt={ele.title} height={200} width={200} />
            <h2>{ele.title}</h2>
            <h4>{ele.price}</h4>
            <h4>{ele.category}</h4>
            <h6>{ele.description}</h6>
            <button>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
