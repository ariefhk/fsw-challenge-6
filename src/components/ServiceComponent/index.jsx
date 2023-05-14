import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import styles from "./index.module.css";

export default function ServiceComponent() {
  return (
    <Container className={styles.service}>
      <Row className="w-100 align-items-sm-center">
        <Col sm={6} className={styles.serviceImage}>
          <div className={styles.serviceImageBox}>
            <Image
              src="./images/service.svg"
              alt=""
              srcSet=""
              className="img-fluid"
            />
          </div>
        </Col>
        <Col sm={6} className={`d-flex align-items-end  mt-sm-0 mt-3`}>
          <div className={styles.serviceText}>
            <h1>
              Best Car Rental for any kind of trip in
              <br className="d-sm-none d-block" /> Ciamis!
            </h1>
            <p>
              Sewa mobil di Ciamis bersama Binar Car Rental jaminan harga lebih{" "}
              <br className="d-sm-none d-block" />
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              <br className="d-sm-none d-block" />
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </p>
            <ul className={styles.serviceText__link}>
              <li className={styles.serviceText__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
              </li>
              <li className={styles.serviceText__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li className={styles.serviceText__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li className={styles.serviceText__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li className={styles.serviceText__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
