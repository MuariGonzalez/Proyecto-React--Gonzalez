import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './CardProductos.css';

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <Card className='card cardStile' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{id}</Card.Text>
        <Card.Text>{precio}</Card.Text>
        <Card.Text>{stock}</Card.Text>
        <Link to={`/item/${id}`}>Ver Detalle</Link>
      </Card.Body>
    </Card>
  )
}

export default Item;
