import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";

function ProductsList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  // Adjust here to slice the first nine items
  const firstNineItems = data?.slice(0, 9);

  return (
    <div className="container">
      {firstNineItems?.map((item) => (
        <div key={item.product_id} >
          <img src={item.thumbnail} alt={item.title}  />
          <div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
            <p className="card-text">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
