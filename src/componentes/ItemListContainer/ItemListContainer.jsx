import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListConatiner = (props) => {
    const [producto, setProducto] = useState([]);
    
    const { idCategoria } = useParams();

    useEffect (() => {
      const funcion = idCategoria ? getProductosPorCategoria : getProductos;

      funcion(idCategoria)
        .then(resolve => setProducto(resolve))
        
      
    }, [idCategoria])

  
  return( 
    <>
      <h2> {props.greeting} </h2>
      <ItemList productos={producto}/>
    </>
  )

}

export default ItemListConatiner