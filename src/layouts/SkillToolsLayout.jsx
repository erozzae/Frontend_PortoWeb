import React from "react";
import ToolCard from "../components/ToolsCard/ToolCard";
import { Col, Container, Row } from "react-bootstrap";
import SubContentHeader from "../components/SubContentHeader/SubContentHeader";
import skillToolsStyles from "../styles/skillTools.module.css";
import { motion } from "motion/react";
import htmlLogo from "../assets/images/devToolsLogo/html.png";
import cssLogo from "../assets/images/devToolsLogo/css.png";
import jsLogo from "../assets/images/devToolsLogo/js.png";
import jqueryLogo from "../assets/images/devToolsLogo/jquery.png";
import reactLogo from "../assets/images/devToolsLogo/react.png";
import phpLogo from "../assets/images/devToolsLogo/php.png";
import laravelLogo from "../assets/images/devToolsLogo/laravel.png";
import bootstrapLogo from "../assets/images/devToolsLogo/bootstrap.png";
import mysqlLogo from "../assets/images/devToolsLogo/mysql.png";
import postgreLogo from "../assets/images/devToolsLogo/postgre.png";
import gitLogo from "../assets/images/devToolsLogo/git.png";

const dummyData = [
  {
    image: htmlLogo,
    title: "HTML",
    description: "A standard markup language",
  },
  {
    image: cssLogo,
    title: "CSS",
    description: "Programming language",
  },
  {
    image: jsLogo,
    title: "JavaScript",
    description: "Programming language",
  },
  {
    image: phpLogo,
    title: "PHP",
    description: "Programming language",
  },
  {
    image: laravelLogo,
    title: "Laravel",
    description: "PHP Framework",
  },
  {
    image: jqueryLogo,
    title: "Jquery",
    description: "JavaScript Library",
  },
  {
    image: reactLogo,
    title: "React JS",
    description: "JavaScript Library",
  },
  {
    image: bootstrapLogo,
    title: "Bootstrap",
    description: "CSS Library",
  },
  {
    image: mysqlLogo,
    title: "MySQL",
    description: "Database Management System",
  },
  {
    image: postgreLogo,
    title: "PostgreSQL",
    description: "Database Management System",
  },
  {
    image: gitLogo,
    title: "Git",
    description: "Version Control System ",
  },
];

const dummySubContentHeader = {
  subtitle: "Esesential Tech I use",
  description:
    "Here are the key technologies and tools I use to build web applications.",
};

function SkillToolsLayout() {
  return (
    <Container
      className={`d-flex flex-column justify-content-center mb-5 border`}
    >
      <div className="">
        <SubContentHeader
          subtitle={dummySubContentHeader.subtitle}
          description={dummySubContentHeader.description}
        />
        <Row className={``}>
          {dummyData.map((item, index) => (
            <Col key={index} sm={6} md={6} lg={3} className="col-12 mb-3 px-2">
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
