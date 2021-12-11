
//Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../src/App.css'

//views

import Home from './views/Home/Home'
import Contacto from './views/Contacto/Contacto'
// import ItemDescription from './views/ItemDescription/ItemDescription'

//Components
import React from 'react'
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



const App = () => {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
        </div>
        <div className="App">
          <Routes>
            / * Dentro de views/Home inclui el componente ItemListContainer */
            <Route path='/' element={<Home />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
