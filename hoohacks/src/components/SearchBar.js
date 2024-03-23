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
    // Here you can use the `url` state for whatever needs you have
    console.log('URL Submitted:', url);
    // For example, redirecting to the URL or performing a search based on the URL
  };

  return (
    <form className="d-flex justify-content-center mt-4" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="url"
        placeholder="Enter URL"
        aria-label="URL"
        value={url}
        onChange={handleUrlChange}
      />
      <button className="btn btn-outline-success" type="submit">Submit</button>
    </form>
  );
};
