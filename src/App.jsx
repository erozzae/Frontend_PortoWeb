import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AboutMe from "./components/AboutMe/AboutMe";
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  return (
    <>
      <NavigationBar/>
      <Container className="my-3">
        <AboutMe />
      </Container>
    </>
  );
}

export default App;
