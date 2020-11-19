import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

class ReservationForm extends React.Component {
    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPersons: 1,
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    updateReservationField = (e) => {
        let reservation = { ...this.state.reservation }
        let currentId = e.currentTarget.id // 'name', 'phone', etc.

        reservation[currentId] = e.currentTarget.value
        this.setState({ reservation: reservation })
    }

    render() {
        return (
            <Form className="w-100" onSubmit={this.submitReservation}>
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
                </Row>
            </Form>
        )
    }
}

export default ReservationForm