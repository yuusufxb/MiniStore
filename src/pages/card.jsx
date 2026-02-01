import { useNavigate } from 'react-router-dom';
import './style/card.css';

export function Card({ cart, setcard }) {

  const nav = useNavigate();
  const deleteCartProduct = (index) => {
    setcard(prev => prev.filter((_, i) => i !== index));
  };
console.log(cart)
  return (
    <div id="card-container">
      <h1 id="card-title">Your Cart</h1>
      { cart.length === 0 && <p id="empty-cart">Cart is empty</p>}

      {cart.map((ca, index) => (
        <div>
        <div id="card-item" key={index}>
          <img src={ca.image} alt="product" id="card-image" />
          <p id="card-name">{ca.title}</p>
          <p id="card-price">${ca.price}</p>
          
          <button id="remove-btn" onClick={() => deleteCartProduct(index)}>
            Remove from cart
          </button>
        </div>
        <p>quantity :{ca.quantity}</p>
        </div>
      ))}
      <button id='return-btn' onClick={()=>nav("/home")}>return home </button>
    </div>
  );
}
