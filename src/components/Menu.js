import {Nav} from "react-bootstrap";

function Menu() {
  return (
      <div><h1>Hotel Booking System</h1>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Forside</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/hotels">Hoteller</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/hotels/create">Opret hotel</Nav.Link>
        </Nav.Item>
      </Nav></div>
  );
}
export default Menu;
