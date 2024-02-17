import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetails({ match }) {
  const productId = match.params; // Extract productId from URL params
  console.log(productId);
  const location = useLocation();
  console.log(location);
  // You can fetch product details from an API or use local data
  // For now, I'm just displaying the product ID
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
    </div>
  );
}
