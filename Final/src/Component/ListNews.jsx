// import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function ListNews(props) {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary">
          {/* <Link to={props.Url}>View</Link> */}
          View
        </Button>
      </Card.Body>
    </Card>
  );
}
