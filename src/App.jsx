import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AboutMe from "./components/AboutMe/AboutMe";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SkillToolsLayout from "./layouts/SkillToolsLayout";
import PortofoliosLayout from "./layouts/PortofoliosLayout";
import ContactmeLayout from "./layouts/ContactmeLayout";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <NavigationBar />
      <Container className="my-5">
        <AboutMe />
        <SkillToolsLayout />
        <PortofoliosLayout />
        <ContactmeLayout />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
