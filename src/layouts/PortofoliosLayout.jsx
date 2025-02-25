import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortofolioCard from "./../components/PortofoliosCard/PortofolioCard";
import SubContentHeader from "../components/SubContentHeader/SubContentHeader";

const dummyData = [
  {
    image:
      "https://www.jagoanhosting.com/blog/wp-content/uploads/2023/11/Website-Builder-Zyro.png",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
  },
  {
    image: "https://badoystudio.com/wp-content/uploads/2019/07/microsoft.png",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqwU7r8bwe1WXIskiipT9Gf0F2IG2smh8MAmB9_tss5e2yvK7aUUukyhlQlPRUkmttAo&usqp=CAU",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
  },
  {
    image:
      "https://www.jagoanhosting.com/blog/wp-content/uploads/2023/11/Website-Builder-Zyro.png",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
  },
  {
    image: "https://badoystudio.com/wp-content/uploads/2019/07/microsoft.png",
    title: "Fullstack Music App",
    description: "Lorem, ipsum dolor.",
  },
];

const dummySubContentHeader = {
  subtitle: "My Projects",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda ratione laborum dolor officiis quisquamasdasasdacasdas adsasd.",
};

function PortofoliosLayout() {
  return (
    <Container className="border border-primary shadow-sm mt-1">
      <SubContentHeader subtitle={dummySubContentHeader.subtitle} description={dummySubContentHeader.description}/>
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
    </Container>
  );
}

export default PortofoliosLayout;
