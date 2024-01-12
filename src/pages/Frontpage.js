import {Container, Nav} from "react-bootstrap";
import Menu from "../components/Menu";

function Frontpage() {
  return (
    <Container className="bg-light p-3 mb-4">
      <Menu/>
        <Container><h2>Forside</h2></Container>
    </Container>
  );
}

export default Frontpage;
