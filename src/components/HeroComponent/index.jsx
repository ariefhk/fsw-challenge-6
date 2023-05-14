import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import styles from './index.module.css'

export default function HeroComponent() {
  return (
    <Container className={styles.hero}>
      <Row>
        <Col
          sm={6}
          className={`d-flex align-item-center px-3 px-sm-0 ${styles.heroReset}`}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className={styles.heroText}>
            <h1>
              Sewa & Rental <br className="d-block d-sm-none" />
              Mobil Terbaik di kawasan Ciamis
            </h1>
            <p>
              Selamat datang di Binar Car Rental.
              <br className="d-block d-sm-none" />
              Kami menyediakan mobil kualitas{" "}
              <br className="d-sm-block d-none" />
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu{" "}
              <br className="d-sm-block d-none" />
              untuk sewa mobil selama 24 jam.
            </p>
            <a href="./cari_mobil.html">
              <Button className={`btn btn-success ${styles.heroBtn}`}>
                Mulai Sewa Mobil
              </Button>
            </a>
          </div>
        </Col>
        <Col
          sm={6}
          className={styles.heroReset}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className={styles.heroImage}>
            <Image
              src="./images/car.svg"
              alt=""
              srcSet=""
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
