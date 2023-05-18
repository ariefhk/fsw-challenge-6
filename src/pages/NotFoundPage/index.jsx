import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Buttons from "../../components/Buttons";
import styles from "./style.module.css";

export default function NotFoundPage() {
  return (
    <Container>
      <Row
        style={{ height: "100vh" }}
        className="justify-content-center align-items-center"
      >
        <Col className="d-flex flex-column align-items-center gap-4 gap-lg-0">
          <Image src="./images/404pages.gif" className={styles.img} />
          <a href="/">
            <Buttons>Back to Home</Buttons>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
