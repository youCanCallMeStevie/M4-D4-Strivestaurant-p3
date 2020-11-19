import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

class ReservationForm extends React.Component {
    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPersons: '1',
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    updateReservationField = (e) => {
        let reservation = { ...this.state.reservation } // creating a copy of the current state
        let currentId = e.currentTarget.id // 'name', 'phone', etc.

        if (currentId === 'smoking') {
            reservation[currentId] = e.currentTarget.checked
        } else {
            reservation[currentId] = e.currentTarget.value // e.currentTarget.value is the keystroke
        }
        //reservation['name'] --> reservation.name = 'S'
        //reservation['phone'] --> reservation.phone = '3'
        this.setState({ reservation: reservation })
    }

    submitReservation = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('https://striveschool.herokuapp.com/api/reservation',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.reservation),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                })
            if (response.ok) {
                alert('Reservation saved!')
                this.setState({
                    reservation: {
                        name: '',
                        phone: '',
                        numberOfPersons: '1',
                        smoking: false,
                        dateTime: '',
                        specialRequests: ''
                    }
                })
            } else {
                console.log('an error occurred')
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <Form className="w-100 mb-5" onSubmit={this.submitReservation}>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your name"
                                required
                                value={this.state.reservation.name}
                                onChange={this.updateReservationField}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label htmlFor="phone">Phone</Form.Label>
                            <Form.Control
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="Your phone"
                                required
                                value={this.state.reservation.phone}
                                onChange={this.updateReservationField}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <Form.Label htmlFor="numberOfPersons">
                                How many people?
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="numberOfPersons"
                                id="numberOfPersons"
                                value={this.state.reservation.numberOfPersons}
                                onChange={this.updateReservationField}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={2} className="flex flex-column align-self-end">
                        <Form.Group>
                            <Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    id="smoking"
                                    label="Smoking?"
                                    checked={this.state.reservation.smoking}
                                    onChange={this.updateReservationField}
                                />
                            </Form.Label>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group>
                            <Form.Label htmlFor="dateTime">Date and Time</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="dateTime"
                                id="dateTime"
                                placeholder="Date and Time"
                                value={this.state.reservation.dateTime}
                                onChange={this.updateReservationField}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label htmlFor="specialRequests">Special requests</Form.Label>
                            <Form.Control
                                type="text"
                                name="specialRequests"
                                id="specialRequests"
                                placeholder="Your special requests"
                                value={this.state.reservation.specialRequests}
                                onChange={this.updateReservationField}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default ReservationForm