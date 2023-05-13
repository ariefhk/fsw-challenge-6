import React, { useState, useEffect } from "react";
import {
  Nav,
  Navbar,
  Container,
  Image,
  Offcanvas,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import styles from "./index.module.css";

export default function LandingPage() {
  const [show, setShow] = useState(false);
  const [colorNav, setColorNav] = useState(false);

  const handleColorNav = () => {
    if (window.scrollY >= 200) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };

  useEffect(() => {
    handleColorNav();
    window.addEventListener("scroll", handleColorNav);
    return () => {
      window.removeEventListener("scroll", handleColorNav);
    };
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className={styles.header}>
        <Navbar
          expand="lg"
          fixed="top"
          className={colorNav ? styles.navColored : styles.navTransparent}
        >
          <Container>
            <Navbar.Brand href="#home">
              <Image src="./images/brand.svg" />
            </Navbar.Brand>
            <Nav className={`ms-auto ${styles.nav}`}>
              <Nav.Link href="#home" className={styles.navLink}>
                Our Services
              </Nav.Link>
              <Nav.Link href="#home" className={styles.navLink}>
                Why Us
              </Nav.Link>
              <Nav.Link href="#link" className={styles.navLink}>
                Testimonial
              </Nav.Link>
              <Nav.Link href="#link" className={styles.navLink}>
                FAQ
              </Nav.Link>
              <Button className={styles.navButton} type="submit">
                Register
              </Button>
            </Nav>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
              className={styles.navbarToggle}
            >
              <FiMenu className="navbar-toggler-icon" />
            </Navbar.Toggle>
            <Offcanvas
              show={show}
              onHide={handleClose}
              style={{ width: "50%" }}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>BCR</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <Nav.Link href="#home" className={styles.navLink}>
                    Our Services
                  </Nav.Link>
                  <Nav.Link href="#home" className={styles.navLink}>
                    Why Us
                  </Nav.Link>
                  <Nav.Link href="#link" className={styles.navLink}>
                    Testimonial
                  </Nav.Link>
                  <Nav.Link href="#link" className={styles.navLink}>
                    FAQ
                  </Nav.Link>
                  <Button className={styles.navButton} type="submit">
                    Register
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
        {/* hero start */}
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
                  terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu <br className="d-sm-block d-none" />
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
        {/* hero end */}
      </header>
      <main>
        {/* service start */}
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
                  Sewa mobil di Ciamis bersama Binar Car Rental jaminan harga
                  lebih <br className="d-sm-none d-block" />
                  murah dibandingkan yang lain, kondisi mobil baru, serta
                  kualitas
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
        {/* service end */}
      </main>
    </>
  );
}
