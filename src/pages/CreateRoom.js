import {Button, Col, Container, Form, InputGroup, Nav, Row, Table} from "react-bootstrap";
import Menu from "../components/Menu";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function CreateRoom() {
    const [hotel, setHotel] = useState([]);
    //get id from the url
    let { id } = useParams();
    useEffect(() => {
        //load hotel from api
        fetch('http://localhost:1010/api/hotels/'+ id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setHotel(data);
            });
    }, []);

    function create(event){
        event.preventDefault()
        // Collect all the form fields
        const formData = new FormData();
        formData.append('numberOfBeds', event.target.numberOfBeds.value);
        formData.append('hotelId', hotel.id);

        // Submit to the api
        fetch('http://localhost:1010/api/rooms', {
            method: "POST",
            body: formData
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
                <h2>Opret værelse</h2>
                <h3>Hotel: {hotel.name}</h3>
                <Form onSubmit={create}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Antal senge</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name="numberOfBeds"
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit">Opret værelse</Button>
                </Form>
            </Container>
        </Container>
    );
}
export default CreateRoom;
