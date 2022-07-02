import { Card } from 'react-bootstrap';

const ThaliDisplayItem = ({ ingredientData }) => {
  return (
    <>
      <Card border="dark" style={{ width: '18rem', margin: '10px' }}>
        <Card.Img
          variant="top"
          src={ingredientData.image}
          height="175px"
          width="175px"
        />
        <Card.Body>
          <Card.Title>{ingredientData.name}</Card.Title>
          <Card.Text>Qty: {ingredientData.qty}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ThaliDisplayItem;
