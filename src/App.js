import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';

const productsData = [
  { name: 'Smartphone', category: 'Electronics', price: 699 },
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'T-Shirt', category: 'Clothing', price: 29 },
  { name: 'Jeans', category: 'Clothing', price: 59 },
  // Add more products here
];

function App() {
  const [filter, setFilter] = useState('All');

  // Filter products based on the active category
  const filteredProducts = filter === 'All'
    ? productsData
    : productsData.filter(product => product.category === filter);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div>
      <h1>Product List</h1>
      <ProductList 
        products={filteredProducts} 
        onFilterChange={handleFilterChange} 
        activeFilter={filter}
      />
    </div>
  );
}

export default App;