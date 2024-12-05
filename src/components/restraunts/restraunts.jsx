import React from 'react';
import './restaurants.css'; 

const Restaurants = () => {
  return (
    <section class="restaurants">
    <div class="bc">
   <h8>Similar Restaurants</h8>
   <div class="restaurants-cards">
       <div class="deals-card">
           <img src="/images/mc logo.png" alt="Burgers & Fast Food"/>
       </div>
       <div class="deals-card">
           <img src="/images/papa logo.png " alt="Salads"/>
       </div>
       <div class="deals-card">
           <img src="/images/KFC logo.png" alt="Pasta & Casuals"/>
       </div>
       <div class="deals-card">
           <img src="/images/texac logo.png" alt="Pizza"/>
       </div>
       <div class="deals-card">
           <img src="/images/burger king logo.png" alt="Breakfast"/>
       </div>
       <div class="deals-card">
           <img src="/images/shaurma logo.png" alt="Soups"/>
       </div>
   </div>
  </div>
  </section>
  
  );
};

export default Restaurants;
