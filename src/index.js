import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './context/productContext';
import { CatagoryProvider } from './context/CatagoryContext';
import reportWebVitals from './reportWebVitals';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { CompareProvider } from './context/CompareContext';
import { OrderProvider } from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserProvider>
            <CatagoryProvider>
                <ProductProvider>
                    <FilterProvider>
                        <CartProvider>
                            <CompareProvider>
                                <OrderProvider>
                                    <App />
                                </OrderProvider>
                            </CompareProvider>
                        </CartProvider>
                    </FilterProvider>
                </ProductProvider>
            </CatagoryProvider>
        </UserProvider>
    </React.StrictMode>
);

reportWebVitals();
