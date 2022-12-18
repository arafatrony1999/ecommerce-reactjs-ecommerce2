import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './assets/css/header.css';
import './assets/css/homepage.css';
import './assets/css/marketplace.css';
import './assets/css/rfq.css';
import './assets/css/login.css';
import './assets/css/product.css';
import './assets/css/profile.css';

import Index from './routes';

function App() {
    // console.log(window.location.pathname)
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
