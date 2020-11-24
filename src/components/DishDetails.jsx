import React from "react";
import { Card, Col, Container, Row, Badge } from "react-bootstrap";
import { DishComments } from "./DishComments";
import allTheDishes from "../data/menu.json";

export class DishDetails extends React.Component {
  state = {
    dish: null,
  };

  componentDidMount = () => {
    let dishId = this.props.match.params.id;
    let correctDishToLoad = allTheDishes.find(
      dish => dish.id.toString() === dishId
    );
    this.setState({
      dish: correctDishToLoad,
    });
  };

  render() {
    return (
      <Container>
          {this.state.dish && <div>
        <Row className="my-2">
          <Col md={3}>
            <img
              src={"/" + this.state.dish.image}
              alt="dish"
              className="img-fluid"
            />
          </Col>
          <Col md={9}>
            <Card>
              <Card.body>
                <Card.Title>{this.state.dish.name}</Card.Title>
                <Card.Subtitle>
                  <Badge variant="danger">{this.state.dish.label}</Badge>
                </Card.Subtitle>
                <Card.Text>{this.state.dish.description}</Card.Text>
              </Card.body>
            </Card>
          </Col>
        </Row>

        <DishComments selectedDish={this.state.selectedDish} />
        </div>}
        {!this.state.dish && <h1>LOADING...</h1>}
      </Container>
    );
  }
}

export default DishDetails;
