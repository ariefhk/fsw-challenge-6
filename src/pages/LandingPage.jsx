import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Container,
  Image,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import styles from "./index.module.css";

export default function LandingPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
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
    </>
  );
}
