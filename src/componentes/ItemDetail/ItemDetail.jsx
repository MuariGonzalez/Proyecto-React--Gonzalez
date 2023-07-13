import Card from 'react-bootstrap/Card';

const ItemDetail = ({id,nombre, precio, Img}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title> {nombre} </Card.Title>
        <h2>ID: {id} </h2>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div > {precio} </div>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;