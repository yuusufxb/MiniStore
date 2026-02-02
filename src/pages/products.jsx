import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
        <img src={product.images[0]} alt={product.title} id="product-image" />
        <div id="product-info">
          <h1 id="product-title">{product.title}</h1>
          <p id="product-brand"><strong>Brand:</strong> {product.brand}</p>
          <p id="product-category"><strong>Category:</strong> {product.category}</p>
          <p id="product-price">
            Price: ${product.price} {" "}
            {product.discountPercentage && <span id="discount">-{product.discountPercentage}%</span>}
          </p>
          <p id="product-rating"><strong>Rating:</strong> {product.rating} ⭐</p>
          <p id="product-stock"><strong>Stock:</strong> {product.stock} ({product.availabilityStatus})</p>
          <p id="product-description">{product.description}</p>
          <p id="product-warranty"><strong>Warranty:</strong> {product.warrantyInformation}</p>
          <p id="product-return"><strong>Return:</strong> {product.returnPolicy}</p>
        </div>
      </div>
    </div>
  );
}