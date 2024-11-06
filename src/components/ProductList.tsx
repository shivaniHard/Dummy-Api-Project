import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Separate fetch function for clarity and best practices
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Run fetch function once on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* Add a simple spinner or any loading animation */}
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{`Error: ${error}`}</p>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-8 justify-center">
        {products.map((product, id) => (
          <div key={id} className="sm:w-3/3 md:w-4/4 lg:w-2/1 xl:w-6/6" >
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
