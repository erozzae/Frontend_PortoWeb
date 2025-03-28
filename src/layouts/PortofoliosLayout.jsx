import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import PortofolioCard from "./../components/PortofoliosCard/PortofolioCard";
import SubContentHeader from "../components/SubContentHeader/SubContentHeader";
import styles from "./../styles/global.module.css";

const dummyData = [
  {
    image:
      "https://www.jagoanhosting.com/blog/wp-content/uploads/2023/11/Website-Builder-Zyro.png",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
    category: "Mini Project",
  },
  {
    image: "https://badoystudio.com/wp-content/uploads/2019/07/microsoft.png",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
    category: "Real Project",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqwU7r8bwe1WXIskiipT9Gf0F2IG2smh8MAmB9_tss5e2yvK7aUUukyhlQlPRUkmttAo&usqp=CAU",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
    category: "Real Project",
  },
  {
    image:
      "https://www.jagoanhosting.com/blog/wp-content/uploads/2023/11/Website-Builder-Zyro.png",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
    category: "Real Project",
  },
  {
    image: "https://badoystudio.com/wp-content/uploads/2019/07/microsoft.png",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
    category: "Real Project",
  },
];

const dummySubContentHeader = {
  subtitle: "My Projects",
  description:
    "A collection of my projects showcasing my skills in web development and problem-solving.",
};

function PortofoliosLayout() {
  return (
    <Container className="shadow-sm mb-5">
      <SubContentHeader
        subtitle={dummySubContentHeader.subtitle}
        description={dummySubContentHeader.description}
      />
      <Tab.Container defaultActiveKey="all">
        <Nav variant="tabs" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="all" style={{ color:"white" }}>All Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="real" style={{ color:"white" }}>projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="mini" style={{ color:"white" }}>Mini Projects</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="mt-3">
          <Tab.Pane eventKey="all">
            <Row>
              {dummyData.map((item, index) => (
                <Col className="mb-3 px-2" key={index} sm={12} md={6} lg={4}>
                  <PortofolioCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                </Col>
              ))}
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="real">
            <Row>
              {dummyData
                .filter((item) => item.category === "Real Project") // Filter data
                .map((
                  item,
                  index // Gunakan map untuk merender elemen
                ) => (
                  <Col className="mb-3 px-2" key={index} sm={12} md={6} lg={4}>
                    <PortofolioCard
                      image={item.image}
                      title={item.title}
                      description={item.description}
                    />
                  </Col>
                ))}
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="mini">
            {dummyData
              .filter((item) => item.category === "Mini Project")
              .map((item, index) => (
                <Col className="mb-3 px-2" key={index} sm={12} md={6} lg={4}>
                  <PortofolioCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                </Col>
              ))}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default PortofoliosLayout;
