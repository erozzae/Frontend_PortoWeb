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
import { ToastProvider } from "./contexts/ToastContext";
import ToastManager from "./components/Toasts/ToastManager";
import { motion } from "motion/react";

function App() {
  const aboutMeRef = useRef(null);
  const skillToolsRef = useRef(null);
  const portofoliosRef = useRef(null);
  const contactMeRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //   <motion.div
  //   initial={{ opacity: 0, y: 75 }}
  //   whileInView={{ opacity: 1, y: 0 }}
  //   transition={{
  //     duration: 0.5,
  //     delay: 0.25,
  //   }}
  // ></motion.div>

  return (
    <div>
      <ToastProvider>
        <NavigationBar
          onAboutClick={() => scrollToSection(aboutMeRef)}
          onSkillsClick={() => scrollToSection(skillToolsRef)}
          onPortofoliosClick={() => scrollToSection(portofoliosRef)}
          onContactClick={() => scrollToSection(contactMeRef)}
        />
        <ToastManager />
        <Container className="my-5">
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
