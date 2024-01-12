import {Button, Col, Container, Form, InputGroup, Nav, Row, Table} from "react-bootstrap";
import Menu from "../components/Menu";
import React from "react";

function CreateHotel() {
    function create(event){
        event.preventDefault()
        // Collect all the form fields
        const formData = new FormData();
        formData.append('name', event.target.name.value);
        formData.append('street', event.target.street.value);
        formData.append('city', event.target.city.value);
        formData.append('zip', event.target.zip.value);
        formData.append('country', event.target.country.value);

        // Submit to the api
        fetch('http://localhost:1010/api/hotels', {
            method:"POST",
            body:formData
        })
            .then((data) => {
                // Redirect to hotels page
                window.location = "/hotels";
            });
    }

    return (
        <Container className="bg-light p-3 mb-4">
            <Menu/>
            <Container>
                <h2>Opret hotel</h2>
                <Form onSubmit={create}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Navn</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="name"
                                placeholder="Hotelnavn"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Adresse"
                                          required
                                          name="street"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>By</Form.Label>
                            <Form.Control type="text"
                                          placeholder="By"
                                          required
                                          name="city"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>Postnummer</Form.Label>
                            <Form.Control type="text"
                                          placeholder="postnummer"
                                          required
                                          name="zip"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3">
                            <Form.Label>Land</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Land"
                                          required
                                          name="country"/>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Opret hotel</Button>
                </Form>
            </Container>
        </Container>
    );
}
export default CreateHotel;
