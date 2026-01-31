import React from 'react';

function LiquorCard({ liquor, onDeleteLiquor }) {
  const { id, name, image, type, price, description } = liquor;

  function handleDeleteClick() {
    // DELETE request
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      // Update state in the parent component
      onDeleteLiquor(id);
    });
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ maxWidth: '200px' }} />
      <h4>Type: {type}</h4>
      <p>{description}</p>
      <p><strong>Price: ${price}</strong></p>
      <button onClick={handleDeleteClick}>Delete</button>
      {/* You can add an "Edit" button here for the UPDATE functionality */}
    </div>
  );
}

export default LiquorCard;