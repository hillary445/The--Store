import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Shop() {
  // 1. We use useCart to get the function to add to the cart
  const { addToCart } = useCart();

  // 2. States to handle data and loading status
  const [products, setProducts] = useState([]); // Here we will store all the products
  const [loading, setLoading] = useState(true);  // This will help us show "Loading..." if the data isn't there yet

  // 3. Fetch Data from db.json
  useEffect(() => {
    // We fetch from port 3000 (which json-server uses by default)
    fetch('http://localhost:3000/products')
      .then((response) => response.json()) // We convert the data into JSON format
      .then((data) => {
        setProducts(data); // We put the fetched data into the 'products' state
        setLoading(false);  // We finish loading
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []); // Empty array [] means this function will only run once when the user enters the page

  // 4. If we are still loading, show a message
  if (loading) {
    return <div style={{textAlign: 'center', marginTop: '50px'}}>Loading Fine Spirits...</div>;
  }

  return (
    <div className="page-container" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h2 className="section-title">Signature Selection</h2>
        
        <div className="product-grid">
          {/* 5. We loop (map) through the data we got from the DB */}
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                {/* The image comes from db.json using product.image */}
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-cat">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                
                {/* 6. This is the button to place an order in the cart */}
                <button 
                  className="btn btn-outline" 
                  style={{ width: '100%' }} 
                  // When we click the button, we call addToCart and pass the relevant product
                  onClick={() => addToCart(product)} 
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}