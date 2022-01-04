// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS
import './App.css';

// views
import React from 'react';
import Home from './views/Home/Home';
import Cart from './views/Cart/Cart';
import Category from './views/Category/Category';
import CheckOut from './views/CheckOut/CheckOut';

// Components
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/Context/UseContext';
import Error from './views/Error/Error';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
