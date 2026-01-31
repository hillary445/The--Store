import React from 'react';
import LiquorCard from './LiquorCard';

function LiquorList({ liquors, onDeleteLiquor }) {
  // Conditional rendering for "No movies available" logic
  if (!liquors || liquors.length === 0) {
    return <h2>No products available. Try adding one!</h2>;
  }

  return (
    <div className="cards-container">
      {liquors.map(liquor => (
        <LiquorCard 
          key={liquor.id} 
          liquor={liquor} 
          onDeleteLiquor={onDeleteLiquor} 
        />
      ))}
    </div>
  );
}

export default LiquorList;