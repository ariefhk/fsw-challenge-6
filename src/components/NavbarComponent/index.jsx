import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import {
  Nav,
  Navbar,
  Container,
  Image,
  Offcanvas,
  Button,
} from "react-bootstrap";
import styles from "./index.module.css";

export default function NavbarComponent() {
  const [show, setShow] = useState(false);
  const [colorNav, setColorNav] = useState(false);

  const handleColorNav = () => {
    if (window.scrollY >= 400) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleColorNav);
    return () => {
      window.removeEventListener("scroll", handleColorNav);
    };
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      style={{ padding: "10px 0" }}
      expand="lg"
      fixed="top"
      className={colorNav ? styles.nav__colored : styles.nav__transparent}
    >
      <Container className={styles.nav__space}>
        <Navbar.Brand href="#home">
          <Image src="./images/brand.svg" />
        </Navbar.Brand>
        <Nav className={`ms-auto ${styles.nav}`}>
          <Nav.Link href="#home" className={styles.nav__link}>
            Our Services
          </Nav.Link>
          <Nav.Link href="#home" className={styles.nav__link}>
            Why Us
          </Nav.Link>
          <Nav.Link href="#link" className={styles.nav__link}>
            Testimonial
          </Nav.Link>
          <Nav.Link href="#link" className={styles.nav__link}>
            FAQ
          </Nav.Link>
          <Button className={styles.nav__button} type="submit">
            Register
          </Button>
        </Nav>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleShow}
          className={styles.navbar__toggle}
        >
          <FiMenu className={`navbar-toggler-icon ${styles.nav__icon}`} />
        </Navbar.Toggle>
        <Offcanvas
          show={show}
          onHide={handleClose}
          style={{ width: "50%" }}
          placement="end"
        >
          <Offcanvas.Header closeButton className={styles.offCanvas__header}>
            <Offcanvas.Title className={styles.offCanvas__header__title}>
              BCR
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className={styles.nav__offCanvas}>
              <Nav.Link href="#home" className={styles.nav__link}>
                Our Services
              </Nav.Link>
              <Nav.Link href="#home" className={styles.nav__link}>
                Why Us
              </Nav.Link>
              <Nav.Link href="#link" className={styles.nav__link}>
                Testimonial
              </Nav.Link>
              <Nav.Link href="#link" className={styles.nav__link}>
                FAQ
              </Nav.Link>
              <Button className={styles.nav__offCanvas__btn} type="submit">
                Register
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}
