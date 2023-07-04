import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";


const Card = (id, nombre, precio,img) => {
  
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {img} />
      <Card.Body>
        <Card.Title> {nombre} </Card.Title>
        <Card.Text>
          {precio}.
        </Card.Text>
        <Link to = {`/card/${id}`} onClick={incrementCount}>Ver Detalle</Link>
        <>
          Count: {count}
          <Button variant="outline-primary" onClick={decrementCount}>-</Button>
          <Button variant="outline-primary" onClick={incrementCount}>+</Button>
        </>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;