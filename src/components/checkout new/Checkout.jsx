import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/Footer";
import "./Checkout.css";  

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [salesTax] = useState(10);

  useEffect(() => {
    // Simulate fetching cart items
    const fetchCartItems = () => {
      const mockCart = [
        {
          id: 1,  
          name: "Big Mac",
          image: "/images/combo 4.png",
          price: 120,
          quantity: 2,
        },
        {
          id: 2,
          name: "French Fries",
          image: "/images/fries1.png",
          price: 50,
          quantity: 1,
        },
        {
          id: 3,
          name: "Cooldrinks",
          image: "/images/cooldrink1.png",
          price: 100,
          quantity: 1,
        },
      ];
      setCart(mockCart);
      const totalPrice = mockCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(totalPrice);
    };

    fetchCartItems();
  }, []);

  // Calculate total price including sales tax
  const totalWithTax = total + salesTax;

  const navigate = useNavigate();

  const handleProceedPayment = () => {
    navigate('/payment', { state: { totalWithTax } });
  };

  // Handle click on delivery address
  const handleDeliveryAddressClick = () => {
    navigate('/address');
  };

  return (
    <div>
      <Header />
      <div className="top">
      <img src="images/arrow-left.png" alt="arrow-left" onClick={() => navigate("/product")}/>
      <h2>Your Order Details</h2></div>
      <div className="checkout-container">
        <div className="bill">
      
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.quantity} x item</p>
                  <p>Price: ₹{item.price}</p>
                </div>
              </div>
            ))}
            <div className="notes">
              <label htmlFor="notes">Notes</label>
              <input id="notes" type="text" placeholder="Add order notes" />
            </div>
          </div>





          <div className="summary-section">
            <div className="delivery-address" onClick={handleDeliveryAddressClick}>
              <img src="images/delivery.png" alt="delivery location icon" />
              <div>
                <span>Delivery Address</span>
                <p>45, Green Street, Sector 12...</p>
              </div>
            </div>

            <div className="bill-summary">
            <div className="checkout-summary">
              <p>Items</p>
              <span> ₹{total}</span>
            </div>
            
            <div className="checkout-summary">
              <p>Sales Tax</p> 
              <span>₹{salesTax}</span>
              </div>
            
            <p className="bill-summary">
              <div className="checkout-summary">
                <span>Subtotal({3} items)</span> 
                 <span>₹{totalWithTax}</span>
              </div>
            </p>
          </div>
            <button className="checkout-button" onClick={handleProceedPayment}>
              Choose Payment Method
            </button>
          </div>
        </div>
      </div>

       {/* Similar Restaurants */}
       <section className="restaurants">
          <div className="bc">
            <h8>Similar Restaurants</h8>
            <div className="restaurants-cards">
              <div className="Deals">
                <img src="/images/mc logo.png" alt="Burgers & Fast Food" />
              </div>
              <div className="Deals">
                <img src="/images/papa logo.png " alt="Salads" />
              </div>
              <div className="Deals">
                <img src="/images/KFC logo.png" alt="Pasta & Casuals" />
              </div>
              <div className="Deals">
                <img src="/images/texac logo.png" alt="Pizza" />
              </div>
              <div className="Deals">
                <img src="/images/burger king logo.png" alt="Breakfast" />
              </div>
              <div className="Deals">
                <img src="/images/shaurma logo.png" alt="Soups" />
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default Checkout;


































// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import Header from "../header/header";
// import Footer from "../footer/Footer";
// import "./checkout.css";

// const Checkout = () => {
//   // const { productId } = useParams();
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);
//   //   const [deliveryAddress, setDeliveryAddress] = useState("");
//   // const [selectedAddress, setSelectedAddress] = useState(1); // Default to the first address


//   useEffect(() => {
//     // Simulate fetching cart items
//     const fetchCartItems = () => {
//       const mockCart = [
//         {
//           id: 1,
//           name: "Big Mac",
//           image: "/images/bigmac.jpg",
//           price: 120,
//           quantity: 2,
//         },
//         {
//           id: 2,
//           name: "French Fries",
//           image: "/images/fries.jpg",
//           price: 50,
//           quantity: 1,
//         },
//         {
//           id: 3,
//           name: "Chicken McNuggets",
//           image: "/images/nuggets.jpg",
//           price: 100,
//           quantity: 1,
//         },
//       ];
//       setCart(mockCart);
//       const totalPrice = mockCart.reduce(
//         (acc, item) => acc + item.price * item.quantity,
//         0
//       );
//       setTotal(totalPrice);
//     };

//     fetchCartItems();
//   }, []);

//   //   const handleAddressChange = (e) => {
//   //     setDeliveryAddress(e.target.value);
//   //   };

//   //   const handleCheckout = () => {
//   //     alert(`Order placed! Delivery Address: ₹{deliveryAddress}`);
//   //   };

//   return (
//     <div>
//       <Header />
//       <div className="checkout-container">
//         {/* <img src="images/arrow-left.png" alt="arrow-left"/> */}
//         <h2>Your Order Details</h2>
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-item-image"
//               />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>Price: ₹{item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//             </div>
//           ))}
//         </div>
   
//         <section class="bill">
        
//               <div class="delivery-address">
//                 <img src="images/delivery.png" alt="delivery location icon" />
//                 <div>
//                   <span>Delivery Address</span>
//                   <p>45, Green Street, Sector 12...</p>
//                 </div>
//               </div>
//               <div class="bill-summary">
                
//                 <div className="checkout-summary">
//                 <span>Items</span>
//                   <span> ₹{total}</span>
//                 </div>
                
//                 <p>
//                   <span>Sales Tax</span> <span>₹10</span>
//                 </p>

//                 <p class="subtotal">
//                 <div className="checkout-summary">
//                   <h3>Subtotal (items) ₹{total}</h3>
//                 </div>
//                 </p>
//               </div>
//               {/* <button class="payment-btn">Choose Payment Method</button> */}
//               <Link to="/payment">
//                 <button className="checkout-button">Choose Payment Method</button>
//                   </Link>
//         </section>

//         {/* <div className="delivery-address">
//           <h3>Delivery Address</h3>
//           <textarea
//             value={deliveryAddress}
//             onChange={handleAddressChange}
//             placeholder="Enter your delivery address"
//             rows="4"
//           ></textarea>
//         </div>
//         <button onClick={handleCheckout} className="checkout-button">
//           Place Order
//         </button> */}
//       </div>

//       {/* Similar Restaurants */}
//       <section className="restaurants">
//         <div className="bc">
//           <h8>Similar Restaurants</h8>
//           <div className="restaurants-cards">
//             <div className="Deals">
//               <img src="/images/mc logo.png" alt="Burgers & Fast Food" />
//             </div>
//             <div class="Deals">
//               <img src="/images/papa logo.png " alt="Salads" />
//             </div>
//             <div class="Deals">
//               <img src="/images/KFC logo.png" alt="Pasta & Casuals" />
//             </div>
//             <div class="Deals">
//               <img src="/images/texac logo.png" alt="Pizza" />
//             </div>
//             <div class="Deals">
//               <img src="/images/burger king logo.png" alt="Breakfast" />
//             </div>
//             <div class="Deals">
//               <img src="/images/shaurma logo.png" alt="Soups" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Checkout;
