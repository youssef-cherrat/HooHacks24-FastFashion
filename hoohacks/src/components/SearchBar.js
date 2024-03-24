import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

export const SearchBar = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [randomFact, setRandomFact] = useState('');

  const facts = [
    "The fast fashion industry is the second largest consumer of water.",
    "Fast fashion is responsible for 10% of global carbon emissions.",
    "It costs 3,000 liters of water to make one cotton shirt.",
    "35% of all microplastics in the environment are from synthetic fibers.",
    "57% of all discarded clothing ends up in landfills.",
    "On average, each item of clothing is only worn 7-10 times.",
    "Each year 80 billion items of clothing are consumed."
  ];

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Select a random fact
    const fact = facts[Math.floor(Math.random() * facts.length)];
    setRandomFact(fact);
    setIsLoading(true); // Start loading

    fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="container mt-4 stable-search-bar">
      <div className="row justify-content-center">
        <div className="col-auto">
          <form onSubmit={handleSubmit} className="d-flex align-items-center">
            <input
              className="form-control me-2"
              type="url"
              placeholder="Enter URL"
              aria-label="URL"
              value={url}
              onChange={handleUrlChange}
              style={{ width: '600px' }}
            />
            <button className="btn btn-outline-success white-text-button" type="submit" disabled={isLoading}>Submit</button>
          </form>
          {isLoading && (
            <>
              <div className="text-center mt-4">
                <strong>Fun Fact:</strong> {randomFact}
              </div>
              <div className="spinner-custom-margin d-flex justify-content-center">
                <div className="spinner-border text-success custom-spinner-size" role="status" style={{ width: '5rem', height: '5rem' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

