import NavBar from "./componentes/navbar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import CardsProductos from "./componentes/Cards/CardsProductos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer/>}/>
          <Route path="/card/:idCard" element = {<ItemListContainer/>}/>
          <Route path="*" element = {<h2>Error 404</h2>}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App