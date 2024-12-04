import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./basket.css";

const Basket = () => {
  const items = [
    {
      id: 1,
      name: "Royal Cheese Burger",
      description: "With extra fries",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      name: "Potato Veggies",
      description: "No Mushrooms + green peppers",
      price: 70,
      quantity: 1,
    },
    {
      id: 3,
      name: "Coke Coca Cola",
      description: "",
      price: 40,
      quantity: 1,
    },
  ];

  const subTotal = items.reduce((total, item) => total + item.price, 0);
  const discount = 3;
  const deliveryFee = 3;
  const total = subTotal - discount + deliveryFee;
 
  return (
    <div className="basket-container">
      <header className="basket-header">
        <div className="basket-icon">🏠</div>
        <span>My Basket</span>
      </header>
      <div className="basket-items">
        {items.map((item) => (
          <div className="basket-item" key={item.id}>
            <div className="item-quantity">{item.quantity}x</div>
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-description">{item.description}</span>
            </div>
            <div className="item-price">₹{item.price}</div>
            <button className="item-remove">🗑️</button>
          </div>
        ))}
      </div>
      <div className="basket-summary">
        <div className="summary-row">
          <span>Sub Total:</span>
          <span>₹{subTotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Discounts:</span>
          <span>-₹{discount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee:</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>
      </div>
      <div className="basket-total">
        <span>Total to pay</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
      <div className="basket-actions">
        <select className="basket-free-item">
          <option>Choose your free item..</option>
        </select>
        <div className="apply-coupon">
          <input
            type="text"
            placeholder="Apply Coupon Code here"
            className="coupon-input"
          />
          <button className="apply-button">➔</button>
        </div>
      </div>
      <div className="basket-delivery">
        <div className="delivery-option">
          <div>🚚 Delivery</div>
          <span>Starts at 17:50</span>
        </div>
        <div className="collection-option">
          <div>🏠 Collection</div>
          <span>Starts at 16:50</span>
        </div>
      </div>
      {/* Updated checkout button */}
      <Link to="/checkout">
        <button className="checkout-button">Checkout!</button>
      </Link>
    </div>
  );
};

export default Basket;



















// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom"; // To get the state passed via Link
// import "./basket.css";

// const Basket = () => {
//   const location = useLocation(); // Get the state from the URL
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Check if there are items passed in the URL state
//     if (location.state && location.state.item) {
//       setItems((prevItems) => [...prevItems, location.state.item]);
//     }
//   }, [location.state]);

//   const subTotal = items.reduce((total, item) => total + item.price, 0);
//   const discount = 3;
//   const deliveryFee = 3;
//   const total = subTotal - discount + deliveryFee;

//   return (
//     <div className="basket-container">
//       <header className="basket-header">
//         <div className="basket-icon">🏠</div>
//         <span>My Basket</span>
//       </header>
//       <div className="basket-items">
//         {items.map((item) => (
//           <div className="basket-item" key={item.id}>
//             <div className="item-quantity">{item.quantity || 1}x</div>
//             <div className="item-details">
//               <span className="item-name">{item.name}</span>
//               <span className="item-description">{item.description}</span>
//             </div>
//             <div className="item-price">₹{item.price}</div>
//             <button className="item-remove">🗑️</button>
//           </div>
//         ))}
//       </div>
//       <div className="basket-summary">
//         <div className="summary-row">
//           <span>Sub Total:</span>
//           <span>₹{subTotal.toFixed(2)}</span>
//         </div>
//         <div className="summary-row">
//           <span>Discounts:</span>
//           <span>-₹{discount.toFixed(2)}</span>
//         </div>
//         <div className="summary-row">
//           <span>Delivery Fee:</span>
//           <span>₹{deliveryFee.toFixed(2)}</span>
//         </div>
//       </div>
//       <div className="basket-total">
//         <span>Total to pay</span>
//         <span>₹{total.toFixed(2)}</span>
//       </div>
//       <button className="checkout-button">Checkout!</button>
//     </div>
//   );
// };

// export default Basket;
