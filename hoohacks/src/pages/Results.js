import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";
import "./Results.css";
import { getCurrentUser } from '@aws-amplify/auth'; // Correct import for fetching current user
import depopLogo from "../pages/CompanyLogo/Depop_logo.png";
import threadUpLogo from "../pages/CompanyLogo/ThreadUp_logo.png";
import mercariLogo from "../pages/CompanyLogo/Mercari_logo.png";
import poshmarkLogo from "../pages/CompanyLogo/Poshmark_logo.png";
import ebayLogo from "../pages/CompanyLogo/EBay_logo.png";

function Results() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error fetching current user:', error);
        setUser(null);
      }
    };

    checkUser();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const firstNineResults = data ? data.slice(0, 9) : [];

  const saveItem = async (item, event) => {
    event.preventDefault(); // Prevent the default action
    try {
      const userId = user.username;

      const response = await fetch('http://localhost:5000/save_item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          itemId: item.product_id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
          link: item.link,
        }),
      });

      if (response.ok) {
        alert('Item saved successfully!');
      } else {
        alert('Failed to save item.');
      }
    } catch (error) {
      console.error('Error saving item:', error);
      alert('Failed to save item.');
    }
  };

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
                  ) : item.source.toLowerCase() === "ebay" ? (
                    <img src={ebayLogo} alt="eBay Logo" style={{ height: '50px', objectFit: 'contain' }} />
                  ) : (
                    <h5>{item.source}</h5> // Display the source text if it doesn't match any known sources
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
                  {user && (
                    <button onClick={(event) => saveItem(item, event)} className="btn btn-primary">
                      Save
                    </button>
                  )}
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
