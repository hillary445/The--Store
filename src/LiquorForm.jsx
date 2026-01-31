import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:4000/liquors";

function LiquorForm({ onAddLiquor }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    image: "",
    description: "",
    price: ""
  });

  const navigate = useNavigate(); // To redirect after form submission

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newLiquor = {
      ...formData,
      price: parseFloat(formData.price) // Ensure price is a number
    };

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLiquor)
    };

    // POST request
    fetch(API_URL, configObj)
      .then(res => res.json())
      .then(data => {
        // THIS STATE UPDATE IS REQUIRED!
        // We call the function passed down from App.js
        onAddLiquor(data);
        
        // Clear form
        setFormData({
          name: "", type: "", image: "", description: "", price: ""
        });

        // Redirect user to the products page
        navigate('/liquor');
      });
  }

  return (
    <div className="form-container">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="type" placeholder="Type (e.g., Whiskey)" value={formData.type} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" step="0.01" value={formData.price} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default LiquorForm;