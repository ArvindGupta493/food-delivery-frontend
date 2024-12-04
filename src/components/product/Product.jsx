
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS
import L from "leaflet"; // Leaflet core
import Header from "../header/header";
import Footer from "../footer/Footer";
import Basket from "../myBasket/basket";
import "./Product.css";

// Fix marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const locations = [
    {
      id: 1,
      name: "McDonald's East London",
      position: [51.505, -0.09],
      description: "East London's favorite McDonald's!",
    },
    {
      id: 2,
      name: "McDonald's Central London",
      position: [51.515, -0.1],
      description: "Located in the heart of London!",
    },
    {
      id: 3,
      name: "McDonald's North London",
      position: [51.525, -0.08],
      description: "Serving delicious meals in North London!",
    },
  ];

  useEffect(() => {
    // Simulate fetching product details
    const fetchProduct = async () => {
      const mockProducts = {
        1: { id: 1, name: "Big Mac", description: "Tasty burger", price: 120 },
        2: { id: 2, name: "Chicken McNuggets", description: "Crispy nuggets", price: 100 },
        3: { id: 3, name: "French Fries", description: "Crunchy fries", price: 50 },
      };

      setTimeout(() => {
        setProduct(mockProducts[productId]);
        setLoading(false);
      }, 500); // Simulate API delay
    };

    fetchProduct();
  }, [productId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("Your link here!");
    alert("Link copied to clipboard!");
  };

  return (
    <div>
      <Header />

      {/* Main Banner */}
      <section className="banner1">
        <div className="banner-content1">
          <p>I'm lovin' it!</p>
          <h1>McDonald’s East London</h1>
          <div className="search-bar1">
            <div id="input_container" style={{ padding: "15px" }}>
              <img
                src="/images/Order Completed.png"
                id="myIcon"
                alt="order completed"
              />
              <div>Minimum Order: 12 GBP</div>
            </div>
            <div id="input_container">
              <img src="/images/Motocross.png" id="myIcons" alt="motocross" />
              <div>Delivery in 20-25 Minutes</div>
            </div>
          </div>

          <div className="home page">
            <img src="/images/product rating.png" alt="background" />
          </div>
          <div className="home pageside image">
            <img src="/images/product burgur.png" alt="home page side" />
          </div>
        </div>

        {/*  Open Section */}
        <div className="open">
          <img src="/images/Clock.png" alt="clock 1" />
          <p>Open until 3:00 AM.</p>
        </div>
      </section>

      {/* search section  */}
      <section className="search">
        <div className="extra">
          <h1>All Offers from McDonald's East London</h1>
          <div id="input_container">
            <img src="/images/Search More.png" id="myIcons" alt="search" />
            <input type="text" id="myInputs" placeholder="Search for menu..." />
          </div>
        </div>
      </section>

      {/* Exclusive Deals */}
      <section className="exclusive-deals1">
        <div className="just">
          <div className="bar1">
            <ul className="bar-links1">
              <li className="bar-item"> <a href="#Vegan" className="bar-link"> Offers </a> </li>
              <li className="bar-item"> <a href="#Sushi" className="bar-link"> Burgers </a> </li>
              <li className="bar-item"><a href="#fries" className="bar-link"> Fries  </a> </li>
              <li className="bar-item"><a href="#snacks" className="bar-link">Snacks</a> </li>
              <li className="bar-item"><a href="#fries" className="bar-link">Salads</a> </li>
              <li className="bar-item"><a href="#fries" className="bar-link">Cool drink </a></li>
              <li className="bar-item"><a href="#fries" className="bar-link"> Happy Meal®{" "} </a> </li>
              <li className="bar-item"> <a href="#fries" className="bar-link">Desserts</a> </li>
              <li className="bar-item"> <a href="#fries" className="bar-link"> Hot drinks </a> </li>
              <li className="bar-item"><a href="#fries" className="bar-link"> Souces  </a> </li>
              <li className="bar-item"> <a href="#fries" className="bar-link">  Orbit®  </a> </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deals */}
      <div style={{ display: "flex", gap: "50px" }}>
        <div style={{ width: "70%" }}>
          <section>
            <div className="bn">
              <div className="deals-container">
                <div className="deal-card"> <img src="/images/main1.png" alt="Chef Burgers London" /> </div>
                <div className="deal-card"> <img src="/images/main2.png" alt="Grand Ai Cafe London" /> </div>
                <div className="deal-card"> <img src="/images/main3.png" alt="Butterbrot Café London" /> </div>
              </div>
            </div>
          </section>

          {/* Burgers Section */}
          <section className="burgers">
            <h7>Burgers</h7>
            <div className="category-cards">
              <div className="deals-card">
                <img src="/images/combo 1.png" alt="Burgers & Fast Food" />
                <h2>Royal Cheese Burger with extra Fries</h2>
                <p>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</p>
                <h2>₹ 120</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>

              <div class="deals-card">
                <img src="/images/combo 2.png" alt="Salads" />
                <h2>The classics for 2</h2>
                <p>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p>
                <h2>₹ 120</h2>
                <img src="/images/plus background.png" alt="background" />

                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              <div class="deals-card">
                <img src="/images/combo3.png" alt="Pasta & Casuals" />
                <h2>The classics for 3 </h2>
                <p>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p>
                <h2>₹ 120</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              <div class="deals-card">
                <img src="/images/combo 4.png" alt="Pizza" />
                <h2>The classics for 4</h2>
                <p> 1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks  </p>
                <h2>₹ 120</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
            </div>
          </section>

          {/* Fries Section */}
          <section className="Fries">
            <h7>Fries</h7>
            <div className="category-cards">
              <div class="deals-card">
                <img src="/images/fries1.png" alt="Burgers & Fast Food" />
                <h2>Royal Cheese Burger with extra Fries</h2>
                <p>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</p>
                <h2>₹ 70</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              <div class="deals-card">
                <img src="/images/fries2.png" alt="Salads" />
                <h2>The classics for 2</h2>
                <p>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p>
                <h2>₹ 70</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              <div class="deals-card">
                <img src="/images/fries3.png" alt="Pasta & Casuals" />
                <h2>The classics for 3 </h2>
                <p>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p>
                <h2>₹ 70</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              <div class="deals-card">
                <img src="/images/fries4.png" alt="Pizza" />
                <h2>The classics for 4</h2>
                <p>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p>
                <h2>₹ 70</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
            </div>
          </section>

          {/* Cooldrinks Section */}
          <section className="cooldrinks">
            <h7>Cooldrinks</h7>
            <div className="category-cards">
              <div class="deals-card">
                <img src="/images/cooldrink1.png" alt="Burgers & Fast Food" />
                <h2>Royal Cheese Burger with extra Fries</h2>
                <p>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</p>
                <h2>₹ 40</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              <div class="deals-card">
                <img src="/images/cooldrink 2.png" alt="Salads" />
                <h2>The classics for 2</h2>
                <p>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p>
                <h2>₹ 40</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              <div class="deals-card">
                <img src="/images/cooldrink 3.png" alt="Pasta & Casuals" />
                <h2>The classics for 3 </h2>
                <p>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p>
                <h2>₹ 40</h2>
                <img src="/images/plus background.png" alt="background" />
                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              <div class="deals-card">
                <img src="/images/cooldrink 4.png" alt="Pizza" />
                <h2>The classics for 4</h2>
                <p>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p>
                <h2>₹ 40</h2>
                <img src="/images/plus background.png" alt="background" />

                <a href="destination URL">
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
            </div>
          </section>
        </div>


        {/* basket and share section  */}

        <div style={{ paddingTop: "20px" }}>
          <div className="share-cart-container">
            <img src="/images/share-2.png" alt="share" />
            <span className="share-cart-text">
              Share this cart with your friends
            </span>
            <button className="share-cart-button" onClick={handleCopyLink}>
              Copy Link
            </button>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Basket />
          </div>
        </div>
      </div>

      <section class="container">
        {/* <!-- <div class="container"> --> */}
        <div class="section delivery">
          <div class="delivery">
            <a href="#track">
              <img src="/images/Tracking.png" alt="tracker" />
            </a>
            <h9>Delivery Information</h9>
          </div>
          <ul>
            <li>
              <strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Tuesday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Wednesday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Thursday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Friday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Saturday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Sunday:</strong> 8:00 AM–12:00 AM
            </li>
          </ul>
          <p>
            <strong>Estimated time until delivery:</strong> 20 min
          </p>
        </div>

        <div class="section contact">
          <div class="delivery">
            <a href="#contact">
              <img src="/images/contact.png" alt="tracker" />
            </a>
            <h9> Contact information</h9>
          </div>
          {/* <!-- <h2>📋 Contact information</h2> --> */}
          <p>
            If you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
          </p>
          <p>
            <strong>Phone number:</strong> +934443-43
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a>
          </p>
        </div>

        <div class="section operational">
          <div class="delivery">
            <img src="/images/Clock 2.png" alt="tracker" />
            <h10>Operational Times</h10>
          </div>
          {/* <!-- <h2>⏰ Operational Times</h2> --> */}
          <ul>
            <li>
              <strong>Monday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Tuesday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Wednesday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Thursday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Friday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Saturday:</strong> 8:00 AM–3:00 AM
            </li>
            <li>
              <strong>Sunday:</strong> 8:00 AM–3:00 AM
            </li>
          </ul>
        </div>
        {/* </div> */}
      </section>



 {/* Map Section */}
 <section className="map-section" style={{ padding: "20px" }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker key={location.id} position={location.position}>
              <Popup>
                <h3>{location.name}</h3>
                <p>{location.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>






      
      {/* Customer Reviews */}
      <section className="customer review">
        <div className="head">
          <div className="title-container">
            <h1>Customer Reviews</h1>
            <img
              src="/images/left.png"
              alt="left button"
              className="nav-btn left"
            />
            <img
              src="/images/right.png"
              alt="right button"
              className="nav-btn right"
            />
          </div>

          <div className="review">
            <img src="/images/review.png" alt="review 1" class="review-img" />
            <img src="/images/review.png" alt="review 2" class="review-img" />
            <img src="/images/review.png" alt="review 3" class="review-img" />
          </div>
        </div>
      </section>

      {/* Rating Div */}
      <div className="rating">
        <img src="/images/product rating.png" alt="product rating" />
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
              <img src="/images/papa logo.png" alt="Salads" />
            </div>
            <div class="Deals">
              <img src="/images/KFC logo.png" alt="Pasta & Casuals" />
            </div>
            <div class="Deals">
              <img src="/images/texac logo.png" alt="Pizza" />
            </div>
            <div class="Deals">
              <img src="/images/burger king logo.png" alt="Breakfast" />
            </div>
            <div class="Deals">
              <img src="/images/shaurma logo.png" alt="Soups" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
























// import React from "react";
// import { Link } from "react-router-dom"; // to link to the basket page
// import "./Product.css";

// const Product = ({ product }) => {
//   const handleAddToBasket = (product) => {
//     // Redirecting to the basket and passing item details in URL or through state
//     // You could also use context or redux to store basket data globally
//   };

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <h3>₹{product.price}</h3>

//       {/* Add to Basket Button */}
//       <Link
//         to={{
//           pathname: "/basket", // Link to basket page
//           state: { item: product }, // Pass the product as state (or use URL params)
//         }}
//       >
//         <button className="add-to-basket-button">Add to Basket</button>
//       </Link>
//     </div>
//   );
// };

// export default Product;





