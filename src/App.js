
//Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../src/App.css'

//views
import Home from './views/Home/Home'
import Cart from './views/Cart/Cart';

//Components
import React from 'react'
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/Context/UseContext';


const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/detail/:id' element={<ItemDetailContainer />} />
              <Route path='/Cart' element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
