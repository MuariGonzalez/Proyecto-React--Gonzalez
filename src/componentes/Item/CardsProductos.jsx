import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {precio}.
        </Card.Text>
        <Link to={`/card/${id}`}>Ver Detalle</Link>
        <div>
          Count: {count}
          <Button variant="outline-primary" onClick={decrementCount}>-</Button>
          <Button variant="outline-primary" onClick={incrementCount}>+</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;
