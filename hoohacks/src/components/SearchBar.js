import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

export const SearchBar = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    fetch('http://localhost:5000/search', { // Update the URL/port as needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success response
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors here
    })
    .finally(() => {
      setIsLoading(false); // Stop loading regardless of the outcome
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
            <div className="spinner-custom-margin d-flex justify-content-center">
              <div className="spinner-border text-success custom-spinner-size" role="status" style={{ width: '5rem', height: '5rem' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

