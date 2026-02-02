import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './style/product.css'
export function Products(){
    const { id } = useParams(); // get product id from URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const nav = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
     <div id="product-page">
      <button id="back-btn" onClick={() => nav("/home")}>← Back to Home</button>
      <div id="product-card">
        <div id="image-section">
          <img src={product.images[0]} alt={product.title} />
        </div>

        <div id="info-section">
          <h1 id="title">{product.title}</h1>
          <p id="brand"><strong>Brand:</strong> {product.brand}</p>
          <p id="category"><strong>Category:</strong> {product.category}</p>
          <p id="price">
            ${product.price} <span id="discount">{product.discountPercentage ? `-${product.discountPercentage}%` : ""}</span>
          </p>
          <p id="rating-stock">
            ⭐ {product.rating} | <span>{product.stock} in stock</span>
          </p>
          <p id="description">{product.description}</p>
          <div id="extra-info">
            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
            <p><strong>Availability:</strong> {product.availabilityStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}