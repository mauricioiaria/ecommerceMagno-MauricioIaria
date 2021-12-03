
//Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//views

import Home from './views/Home/Home'
import SobreNosotros from './views/SobreNosotros/SobreNosotros'
import Contacto from './views/Contacto/Contacto'
import ItemDescription from './views/ItemDescription/ItemDescription'

//Components
import React from 'react'
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        {/* <ItemListContainer /> */}
        {/* <ItemDetailContainer /> */}
        <Routes>
          / * Dentro de views/Home inclui el componente ItemListContainer */
          <Route path='/' element={<Home />} />
          <Route path='/SobreNosotros' element={<SobreNosotros />} />
          <Route path='/Contacto' element={<Contacto />} />          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/detail/:id' element={<ItemDescription />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
