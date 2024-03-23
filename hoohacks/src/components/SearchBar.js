// components/SearchBar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchBar = () => {
  const [url, setUrl] = useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('URL Submitted:', url);
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
            <button className="btn btn-outline-success" type="submit" style={{ color: '#fff' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
