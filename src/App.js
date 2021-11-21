// import React, { Component } from "react";
// import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <ItemListContainer greeting={'Modificacion con PROP'} />
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App
