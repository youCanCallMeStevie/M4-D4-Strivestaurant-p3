import React, { Component } from "react";
import items from "../data/menu.json";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { DishComments } from "./DishComments";
import ReservationForm from "./ReservationForm";
class Home extends Component {
  state = {
    selectedDish: null,
  };

  selectNewDish = (dish) => {
    // console.log("Dish selected", dish);
    this.setState({ selectedDish: dish });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={6}>
            <h1>Welcome To Strivestaurant!</h1>
            <p className="lead">The best dishes you can find on the web!</p>
            <hr className="my-2" />
            <p>Come and visit us, we can only cook Pasta!</p>
            <Carousel>
              {items.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                    onClick={() => this.selectNewDish(item)}
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
              )}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <DishComments selectedDish={this.state.selectedDish} />
        </Row>
        <Row>
          <ReservationForm />
        </Row>
      </Container>
    );
  }
}

export default Home;
