import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Shop({ searchQuery }) {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/hillary445/The--Store/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{textAlign: 'center', marginTop: '50px'}}>Loading Fine Spirits...</div>;
  }

  // 🔎 Filter products by name or category
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h2 className="section-title">Signature Selection</h2>
        
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-cat">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                  <button 
                    className="btn btn-outline" 
                    style={{ width: '100%' }} 
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{textAlign: 'center'}}>No products match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}