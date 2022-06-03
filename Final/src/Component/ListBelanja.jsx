import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function ListNews(props) {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <h5 className="text-end">${props.price}</h5>
        <Button
          onClick={() => {
            props.belanja(props.price);
          }}
          variant="primary"
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}
