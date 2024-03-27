import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";
import "./Results.css"; 
import depopLogo from "./CompanyLogo/Depop_logo.png"; // Adjust the path as necessary
import threadUpLogo from "./CompanyLogo/ThreadUp_logo.png"; 
import mercariLogo from "./CompanyLogo/Mercari_logo.png"; 
import poshmarkLogo from "./CompanyLogo/Poshmark_logo.png"; 
import ebayLogo from "./CompanyLogo/EBay_logo.png";

function Results() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const firstNineResults = data ? data.slice(0, 9) : [];

  return (
    <div className="container mt-4">
      <h1>Alternative Fashion Items</h1>
      <div className="row">
        {firstNineResults.map((item) => (
          <div className="col-md-4 mb-4" key={item.product_id}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="card card-custom h-100">
                <div className="card-header">
                  {item.source.toLowerCase() === "depop" ? (
                    <img src={depopLogo} alt="Depop Logo" style={{ height: '50px', objectFit: 'contain' }} />
                  ) : item.source.toLowerCase() === "thredup" ? (
                    <img src={threadUpLogo} alt="ThredUp Logo" style={{ height: '50px', objectFit: 'contain' }} />
                  ) : item.source.toLowerCase() === "mercari" ? (
                    <img src={mercariLogo} alt="Mercari Logo" style={{ height: '50px', objectFit: 'contain' }} />
                  ) : item.source.toLowerCase() === "poshmark" ? (
                    <img src={poshmarkLogo} alt="Poshmark Logo" style={{ height: '50px', objectFit: 'contain' }} />
                  ) : item.source.toLowerCase() === "ebay" ? ( // Added condition for eBay
                    <img src={ebayLogo} alt="eBay Logo" style={{ height: '50px', objectFit: 'contain' }} />
                  ) : (
                    item.source // Display the source text if it doesn't match any known sources
                  )}
                </div>
                <img
                  src={item.thumbnail}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
