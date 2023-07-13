import NavBar from "./componentes/navbar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
//import CardsProductos from "./componentes/Item/CardsProductos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer/>}/>
          <Route path="/item/:idItem" element = {<ItemDetailContainer/>}/>
          <Route path="*" element = {<h2>Error 404</h2>}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App