import React from 'react';

function ProductList({ products, onFilterChange, activeFilter }) {
  const categories = ['All', 'Electronics', 'Clothing'];

  return (
    <div>
      {/* Filter Buttons */}
      <div className="filter-section">
        {categories.map(category => (
          <button 
            key={category} 
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Display Area */}
      <div className="product-display">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;