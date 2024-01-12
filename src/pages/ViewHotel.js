import {Container, Nav, Table} from "react-bootstrap";
import Menu from "../components/Menu";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function ViewHotel() {
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
  return (
    <Container className="bg-light p-3 mb-4">
      <Menu/>
      <Container>
          <h2>Hotel: {hotel.name}</h2>
          <Table striped bordered hover>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Navn</th>
                  <th>Adresse</th>
                  <th>Antal værelser</th>
              </tr>
              </thead>
              <tbody>
                  <tr key={hotel.id}>
                      <td>{hotel.id}</td>
                      <td>{hotel.name}</td>
                      <td>{hotel.street}</td>
                      <td>{hotel.roomCount}</td>
                  </tr>
              </tbody>
          </Table>
      </Container>
    </Container>
  );
}
export default ViewHotel;
