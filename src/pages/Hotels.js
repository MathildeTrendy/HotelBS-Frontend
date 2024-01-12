import {Container, Nav, Table} from "react-bootstrap";
import Menu from "../components/Menu";
import {useEffect, useState} from "react";


function Hotels() {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1010/api/hotels')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setHotels(data);
            });
    }, []);

    function deleteHotel(id) {
        console.log("deleteHotel " + id);
        fetch('http://localhost:1010/api/hotels/' + id, {
            method:"DELETE",
        })
            .then((res) => {
                console.log("response", res)
                return res.json();
            })
            .then((data) => {
                //refreshing page
                window.location.reload();
            });
    }
  return (
    <Container className="bg-light p-3 mb-4">
      <Menu/>
      <Container>
          <h2>Hoteller</h2>
          <Table striped bordered hover>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Navn</th>
                  <th>Adresse</th>
                  <th>Antal værelser</th>
                  <th>Handling</th>
              </tr>
              </thead>
              <tbody>
              {hotels.map((hotel) => (
                  <tr key={hotel.id}>
                      <td>{hotel.id}</td>
                      <td>{hotel.name}</td>
                      <td>{hotel.street}</td>
                      <td>{hotel.roomCount}</td>
                      <td>
                          <a className="m-2 d-inline-block" href={"/hotels/" + hotel.id}>Se detaljer</a>
                          <a className="m-2 d-inline-block" href={"/hotels/update/" + hotel.id}>Redigér hotel</a>
                          <a className="m-2 d-inline-block" href={"/hotels/" + hotel.id + "/rooms/create"}>Tilføj værelse</a>
                          <a className="m-2 d-inline-block" href="#" onClick={() => deleteHotel(hotel.id)}>Slet hotel</a>
                      </td>
                  </tr>
              ))}
              </tbody>
          </Table>
      </Container>
    </Container>
  );
}
export default Hotels;
