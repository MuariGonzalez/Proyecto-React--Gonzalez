import NavBar from "./componentes/navbar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Mis Productos"}/>
    </>
  )
}

export default App