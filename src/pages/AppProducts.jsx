import React, { useState } from "react";
import ProductService from "../services/ProductService";

export default function AppProducts() {
  const [products, setProducts] = useState(ProductService.getAll());
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchProducts = (searchTerm) => {
    setSearchTerm(searchTerm);
    setProducts(ProductService.search(searchTerm));
  };

  const handleProductCount = (product) => {
    setProducts(
      products.map((productState) => {
        if (productState.id === product.id) {
          productState.count = product.count;
        }
        return productState;
      })
    );
  };

  const handleIncrementCount = (id) => {
    const product = ProductService.increment(id);
    handleProductCount(product);
  };

  const handleDecrementCount = (id) => {
    const product = ProductService.decrement(id);
    if (product) {
      handleProductCount(product);
    }
  };

  return (
    <div>
      <h1>Product list</h1>
      <p>Search product</p>
      <input
        value={searchTerm}
        onChange={({ target }) => handleSearchProducts(target.value)}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>Count: {product.count}</p>
            <button onClick={() => handleIncrementCount(product.id)}>
              <strong>+</strong>
            </button>
            <button onClick={() => handleDecrementCount(product.id)}>
              <strong>-</strong>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
