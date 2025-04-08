import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AboutMe from "./components/AboutMe/AboutMe";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SkillToolsLayout from "./layouts/SkillToolsLayout";
import PortofoliosLayout from "./layouts/PortofoliosLayout";
import ContactmeLayout from "./layouts/ContactmeLayout";
import Footer from "./components/Footer/Footer";
import NormalToast from "./components/Toasts/NormalToast";
import { ToastProvider, useToast } from "./contexts/ToastContext";
import DangerToast from "./components/Toasts/DangerToast";

const NormalToastSection = () => {
  const { showToast, setShowToast } = useToast();
  return (
    <div>
      <NormalToast
        show={showToast}
        onClose={() => setShowToast(false)}
        title="Success !"
        message="Message sent successfully"
      />
    </div>
  );
};

function App() {
  const aboutMeRef = useRef(null);
  const skillToolsRef = useRef(null);
  const portofoliosRef = useRef(null);
  const contactMeRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ToastProvider>
        <NavigationBar
          onAboutClick={() => scrollToSection(aboutMeRef)}
          onSkillsClick={() => scrollToSection(skillToolsRef)}
          onPortofoliosClick={() => scrollToSection(portofoliosRef)}
          onContactClick={() => scrollToSection(contactMeRef)}
        />

        <Container className="my-5">
          <NormalToastSection />
          <div ref={aboutMeRef}>
            <AboutMe />
          </div>
          <div ref={skillToolsRef}>
            <SkillToolsLayout />
          </div>
          <div ref={portofoliosRef}>
            <PortofoliosLayout />
          </div>
          <div ref={contactMeRef}>
            <ContactmeLayout />
          </div>
        </Container>

        <Footer
          onAboutClick={() => scrollToSection(aboutMeRef)}
          onSkillsClick={() => scrollToSection(skillToolsRef)}
          onPortofoliosClick={() => scrollToSection(portofoliosRef)}
          onContactClick={() => scrollToSection(contactMeRef)}
        />
      </ToastProvider>
    </div>
  );
}

export default App;
