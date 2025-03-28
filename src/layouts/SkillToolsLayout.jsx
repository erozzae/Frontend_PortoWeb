import React from "react";
import ToolCard from "../components/ToolsCard/ToolCard";
import { Col, Container, Row } from "react-bootstrap";
import SubContentHeader from "../components/SubContentHeader/SubContentHeader";
import skillToolsStyles from "../styles/skillTools.module.css";
import { motion } from "motion/react";

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
    "Here are the key technologies and tools I use to build web applications.",
};

function SkillToolsLayout() {
  return (
    <Container className={`d-flex flex-column justify-content-center mb-5 border`}>
      <div className="">
        <SubContentHeader
          subtitle={dummySubContentHeader.subtitle}
          description={dummySubContentHeader.description}
        />
        <Row className={``}>
          {dummyData.map((item, index) => (
            <Col
              key={index}
              sm={6}
              md={6}
              lg={3}
              className="col-12 mb-3 px-2"
            >
              <ToolCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default SkillToolsLayout;
