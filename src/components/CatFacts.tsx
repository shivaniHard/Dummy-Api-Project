import React, { useState, useEffect } from 'react';
import Cat from './Cat';

const CatFacts = () => {
  const [catFacts, setCatFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
 
  useEffect(() => {
    const fetchCatFacts = async () => {
      setLoading(true);
      setError(null); 
      try {
        const response = await fetch(`https://catfact.ninja/facts?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cat facts');
        }
        const data = await response.json();
        setCatFacts(data.data);
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchCatFacts();
  }, [currentPage]);

  
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Cat Facts</h1>

     
      {error && <p className="text-red-500 text-center">{error}</p>}

      
      {loading && <p className="text-center">Loading cat facts...</p>}

      
      <div className="flex flex-wrap gap-10 justify-center">
        {!loading && !error && catFacts.map((fact, index) => (
          <Cat key={index} fact={fact} />
        

        ))}
        
      </div>

     
      <div className="flex justify-center gap-4 mt-8">
        <button
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300`}
        >
          Previous
        </button>
        <button
          aria-label="Next page"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CatFacts;
