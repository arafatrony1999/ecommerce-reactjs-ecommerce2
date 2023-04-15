import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import './assets/css/header.css';
import './assets/css/homepage.css';
import './assets/css/marketplace.css';
import './assets/css/rfq.css';
import './assets/css/login.css';
import './assets/css/product.css';
import './assets/css/profile.css';
import './assets/css/slider.css';
import './assets/css/cart.css';
import './assets/css/addresses.css';

import Index from './routes';

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
