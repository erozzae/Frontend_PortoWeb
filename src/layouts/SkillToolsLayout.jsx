import React from "react";
import ToolCard from "../components/ToolsCard/ToolCard";
import { Col, Container, Row } from "react-bootstrap";
import SubContentHeader from "../components/SubContentHeader/SubContentHeader";

const dummyData = [
  {
    image:
      "https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon.png",
    title: "Gunung Indah",
    description: "Pemandangan Alam",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/042/158/708/non_2x/python-logo-icon-programming-language-free-vector.jpg",
    title: "Pantai Senja",
    description: "Pasir Putih",
  },
  {
    image:
      "https://i.pinimg.com/736x/f0/1f/69/f01f692c14ed47421cbc564ae4bf0ed3.jpg",
    title: "Hutan Hijau",
    description: "Udara Segar",
  },
  {
    image:
      "https://www.citypng.com/public/uploads/preview/hd-java-programming-logo-png-701751694771848sm650yaqjt.png",
    title: "Kota Malam",
    description: "Lampu Terang",
  },
  {
    image:
      "https://i.pinimg.com/736x/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.jpg",
    title: "Danau Tenang",
    description: "Air Jernih",
  },
];

const dummySubContentHeader = {
  subtitle: "Esesential Tech I use",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda ratione laborum dolor officiis quisquam.",
};

function SkillToolsLayout() {
  return (
    <Container id="skills" className="mt-1 mb-2 border">
      <SubContentHeader subtitle={dummySubContentHeader.subtitle} description={dummySubContentHeader.description} />
      <Row className="border">
        {dummyData.map((item, index) => (
          <Col key={index} sm={6} md={6} lg={3} className="col-12 mb-3 border">
            <ToolCard
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

export default SkillToolsLayout;
