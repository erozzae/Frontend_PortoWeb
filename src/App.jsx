import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AboutMe from "./components/AboutMe/AboutMe";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SkillToolsLayout from "./layouts/SkillToolsLayout";
import PortofoliosLayout from './layouts/PortofoliosLayout';
function App() {
  return (
    <>
      <NavigationBar/>
      <Container className="my-4">
        <AboutMe />
        <SkillToolsLayout/>
        <PortofoliosLayout/>
      </Container>
    </>
  );
}

export default App;
