import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <Container className="my-5 border border-primary">
      <AboutMe/>
    </Container>
  );
}

export default App;
