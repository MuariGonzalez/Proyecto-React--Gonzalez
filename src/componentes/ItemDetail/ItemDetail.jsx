import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {CarritoContext} from '../../context/CarritoContext'


const ItemDetail = ({id, nombre, precio, img, stock}) => {
  
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item,cantidad)
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={img} />
        <Card.Title>Nombre: {nombre} </Card.Title>
        <h2>ID: {id} </h2>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div >Precio: {precio} </div>
        
        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        }

      </Card.Body>
    </Card>
  );
}

export default ItemDetail;