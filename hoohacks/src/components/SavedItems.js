import React, { useState, useEffect } from 'react';
import './SavedItems.css';

const SavedItems = ({ user }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavedItems = async () => {
      try {
        const userId = user.username;
        console.log('Fetching saved items for user:', userId);

        const response = await fetch(`http://localhost:5000/get_saved_items?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Received saved items:', data);

        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching saved items:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchSavedItems();
  }, [user]);

  const deleteItem = async (itemId) => {
    try {
      const userId = user.username;
      console.log('Deleting item for user:', userId);

      const response = await fetch('http://localhost:5000/delete_item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          itemId,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setItems(items.filter(item => item.itemId !== itemId));
      console.log('Item deleted successfully!');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mt-4">
      <h2>Saved Items</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 mb-4" key={item.itemId}>
            <div className="card card-custom h-100">
              <img src={item.Thumbnail} className="card-img-top" alt={item.Title} />
              <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <p className="card-text">{item.Price}</p>
                <a href={item.Link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View</a>
                <button onClick={() => deleteItem(item.itemId)} className="btn btn-danger ml-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedItems;
