import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";


const ItemListConatiner = (props) => {
    const [producto, setProductos] = useState([]);
    
    const { idCategoria } = useParams();

    useEffect ( ()=> {
      const misProductos = idCategoria ? query(collection(db, "Mis productos"),where ("idCat", "==", idCategoria)) : collection(db, "Mis productos")

      getDocs(misProductos)
        .then(res => {
            const nuevosProductos = res.docs.map(doc =>{
              const data= doc.data()
              return {id : doc.id, ...data}
            })
            setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
    }, [idCategoria])
    
  return( 
    <>
      <h2> {props.greeting} </h2>
      <ItemList productos={producto}/>
    </>
  )

}

export default ItemListConatiner