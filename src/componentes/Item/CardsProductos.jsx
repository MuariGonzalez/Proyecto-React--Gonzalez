import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './CardProductos.css';

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className='card-caontainer'>
      <Card className='card cardStile' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Nombre: {nombre}</Card.Title>
          <Card.Text>ID: {id}</Card.Text>
          <Card.Text>Precio: {precio}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <Link className='card-link' to={`/item/${id}`}>Ver Detalle</Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item;
