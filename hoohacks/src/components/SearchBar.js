// components/SearchBar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

export const SearchBar = () => {
  const [url, setUrl] = useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/search', { // Update the URL/port as needed
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
    });
  };
  

  return (
    <div className="container mt-4 stable-search-bar"> {/* Add the class here */}
      <div className="row justify-content-center">
        <div className="col-auto">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              className="form-control me-2"
              type="url"
              placeholder="Enter URL"
              aria-label="URL"
              value={url}
              onChange={handleUrlChange}
              style={{ width: '300px' }}
            />
           <button className="btn btn-outline-success white-text-button" type="submit">Submit</button>

          </form>
        </div>
      </div>
    </div>
  );
};
