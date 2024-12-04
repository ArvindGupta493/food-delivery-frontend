import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/Footer";
import "./checkout.css";

const Checkout = () => {
  const { productId } = useParams();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
//   const [deliveryAddress, setDeliveryAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(1); // Default to the first address

  // Dummy Address Data
  const addresses = [
    {
      id: 1,
      name: "Mike Ross",
      address: "45, Green Street, Sector 12, New Delhi, 110001, India",
      phone: "8734637468",
    },
    {
      id: 2,
      name: "Mike Ross",
      address: "Office 704, Tower B, Techno Plaza, Bengaluru, Karnataka, 560100",
      phone: "8937447362",
    },
  ];

  useEffect(() => {
    // Simulate fetching cart items
    const fetchCartItems = () => {
      const mockCart = [
        { id: 1, name: "Big Mac", image: "/images/bigmac.jpg", price: 120, quantity: 2 },
        { id: 2, name: "French Fries", image: "/images/fries.jpg", price: 50, quantity: 1 },
        { id: 3, name: "Chicken McNuggets", image: "/images/nuggets.jpg", price: 100, quantity: 1 },
      ];
      setCart(mockCart);
      const totalPrice = mockCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(totalPrice);
    };

    fetchCartItems();
  }, []);

//   const handleAddressChange = (e) => {
//     setDeliveryAddress(e.target.value);
//   };

//   const handleCheckout = () => {
//     alert(`Order placed! Delivery Address: ${deliveryAddress}`);
//   };

  return (
    <div>
      <Header />
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-summary">
          <h3>Total: ${total}</h3>
        </div>
        {/* <div className="delivery-address">
          <h3>Delivery Address</h3>
          <textarea
            value={deliveryAddress}
            onChange={handleAddressChange}
            placeholder="Enter your delivery address"
            rows="4"
          ></textarea>
        </div>
        <button onClick={handleCheckout} className="checkout-button">
          Place Order
        </button> */}
      </div>

      {/* Similar Restaurants */}
      <section className="restaurants">
        <div className="bc">
          <h8>Similar Restaurants</h8>
          <div className="restaurants-cards">
            <div className="Deals">
              <img src="/images/mc logo.png" alt="Burgers & Fast Food" />
            </div>
            <div class="Deals">
           <img src="/images/papa logo.png " alt="Salads"/>
       </div>
       <div class="Deals">
           <img src="/images/KFC logo.png" alt="Pasta & Casuals"/>
       </div>
       <div class="Deals">
           <img src="/images/texac logo.png" alt="Pizza"/>
       </div>
       <div class="Deals">
           <img src="/images/burger king logo.png" alt="Breakfast"/>
       </div>
       <div class="Deals">
           <img src="/images/shaurma logo.png" alt="Soups"/>
       </div>
          </div>
        </div>
      </section>
      <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        {/* Address Selection Section */}
        <div className="address-section">
          <h2>Select Delivery Address</h2>
          <div className="address-list">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className={`address-card ${
                  selectedAddress === addr.id ? "selected" : ""
                }`}
                onClick={() => setSelectedAddress(addr.id)}
              >
                <h3>{addr.name}</h3>
                <p>{addr.address}</p>
                <p>Phone Number: {addr.phone}</p>
                {selectedAddress === addr.id && (
                  <span className="selected-tag">Selected</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Items: 3</p>
          <p>Total Price: $75.00</p>
          <button className="place-order-button">Place Order</button>
        </div>
      </div>
    </div>
  


      <Footer />
    </div>
  );
};

export default Checkout;
