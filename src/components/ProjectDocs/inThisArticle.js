import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import { Link } from "react-scroll";

const InThisArticle = ({ sections }) => {
  return (
    <Card className="p-3">
      <Card.Title>In This Article</Card.Title>
      <ListGroup variant="flush" style = {{cursor : "pointer"}}>
        {sections.map((section) => (
          <ListGroup.Item key={section.id}>
            <Link
              to={section.id}
              smooth={true}
              duration={500}
              containerId="content-scroll-container"
              offset={-50}
            >
              {section.title}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default InThisArticle;

