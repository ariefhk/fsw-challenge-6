import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import styles from "./index.module.css";

export default function FaqComponent() {
  return (
    <Container id="faq" className={styles.faq}>
      <Row>
        <Col lg={6} className={styles.faq__text}>
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col lg={6} className={styles.faq__accord}>
          <Accordion flush>
            <Accordion.Item eventKey="0" className={styles.faq__accord__reset}>
              <Accordion.Header className={styles.faq__accord__item}>
                <h2 className={styles.faq__accord__item__text}>
                  Apa saja syarat yang dibutuhkan?
                </h2>
              </Accordion.Header>
              <Accordion.Body className={styles.faq__accord__border}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={styles.faq__accord__reset}>
              <Accordion.Header className={styles.faq__accord__item}>
                <h2 className={styles.faq__accord__item__text}>
                  Berapa hari minimal sewa mobil lepas kunci?
                </h2>
              </Accordion.Header>
              <Accordion.Body className={styles.faq__accord__border}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={styles.faq__accord__reset}>
              <Accordion.Header className={styles.faq__accord__item}>
                <h2 className={styles.faq__accord__item__text}>
                  Berapa hari sebelumnya sebaiknya
                  <br className="d-block d-sm-none" /> booking sewa mobil?
                </h2>
              </Accordion.Header>
              <Accordion.Body className={styles.faq__accord__border}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className={styles.faq__accord__reset}>
              <Accordion.Header className={styles.faq__accord__item}>
                <h2 className={styles.faq__accord__item__text}>
                  Apakah Ada biaya antar-jemput?
                </h2>
              </Accordion.Header>
              <Accordion.Body className={styles.faq__accord__border}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className={styles.faq__accord__reset}>
              <Accordion.Header className={styles.faq__accord__item}>
                <h2 className={styles.faq__accord__item__text}>
                  Bagaimana jika terjadi kecelakaan
                </h2>
              </Accordion.Header>
              <Accordion.Body className={styles.faq__accord__border}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
