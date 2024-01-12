import {Button, Col, Container, Form, InputGroup, Nav, Row, Table} from "react-bootstrap";
import Menu from "../components/Menu";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function UpdateHotel() {
    const [hotel, setHotel] = useState([]);
    //get id from the url
    let { id } = useParams();
    useEffect(() => {
        //load hotel from api
        fetch('http://localhost:1010/api/hotels/all/'+ id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setHotel(data);
            });
    }, []);

    function update(event){
        event.preventDefault()
        // Collect all the form fields
        const formData = new FormData();
        formData.append('name', event.target.name.value);
        formData.append('street', event.target.street.value);
        formData.append('city', event.target.city.value);
        formData.append('zip', event.target.zip.value);
        formData.append('country', event.target.country.value);

        // Submit to the api
        fetch('http://localhost:1010/api/hotels/' + id, {
            method:"PUT",
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
                <h2>Redigér hotellet {hotel.name}</h2>
                <Form onSubmit={update}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Navn</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="name"
                                placeholder="Hotelnavn"
                                defaultValue={hotel.name}
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
                                          defaultValue={hotel.street}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>By</Form.Label>
                            <Form.Control type="text"
                                          placeholder="By"
                                          required
                                          name="city"
                                          defaultValue={hotel.city}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>Postnummer</Form.Label>
                            <Form.Control type="text"
                                          placeholder="postnummer"
                                          required
                                          name="zip"
                                          defaultValue={hotel.zip}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3">
                            <Form.Label>Land</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Land"
                                          required
                                          name="country"
                                          defaultValue={hotel.country}
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit">Gem hotel</Button>
                </Form>
            </Container>
        </Container>
    );
}
export default UpdateHotel;
