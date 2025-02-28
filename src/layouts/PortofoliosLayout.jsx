import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import PortofolioCard from "./../components/PortofoliosCard/PortofolioCard";
import SubContentHeader from "../components/SubContentHeader/SubContentHeader";

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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda ratione laborum dolor officiis quisquamasdasasdacasdas adsasd.",
};

function PortofoliosLayout() {
  return (
    <Container className="shadow-sm mt-1">
      <SubContentHeader
        subtitle={dummySubContentHeader.subtitle}
        description={dummySubContentHeader.description}
      />
      <Tab.Container defaultActiveKey="all">
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="all">Semua Project</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="real">Real Project</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="mini">Mini Project</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="mt-3">
          <Tab.Pane eventKey="all">
            <Row>
              {dummyData.map((item, index) => (
                <Col className="mb-3" key={index} sm={12} md={6} lg={4}>
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
                  <Col className="mb-3" key={index} sm={12} md={6} lg={4}>
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
                <Col className="mb-3" key={index} sm={12} md={6} lg={4}>
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
