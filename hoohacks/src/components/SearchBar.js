// components/SearchBar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchBar = () => {
  const [url, setUrl] = useState(''); // State to hold the URL input

  // Handle URL input change
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the URL as needed here
    console.log('URL Submitted:', url);
  };

  return (
    <div className="container mt-4">
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
              style={{ width: '300px' }} // Adjust the width as needed
            />
            <button className="btn btn-outline-success" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
