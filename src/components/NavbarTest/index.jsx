import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

export default function NavbarTest() {
  return (
    <nav
      id="navbar"
      class="navbar navbar-expand-lg fixed-top"
      aria-label="Offcanvas navbar large"
    >
      <div class="container navbar--space">
        <a class="navbar-brand" href="#">
          <img src="./assets/images/brand.svg" alt="" srcset="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span class="navbar-toggler-icon">
            <img src="./assets/images/ic_menu.svg" alt="" srcset="" />
          </span>
        </button>
        <div
          class="offcanvas offcanvas-end navbar__ofc"
          tabindex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div class="offcanvas-header navbar__ofc--head">
            <h5
              class="offcanvas-title navbar__ofc--title"
              id="offcanvasNavbar2Label"
            >
              BCR
            </h5>
            <button
              type="button"
              class="navbar__ofc--button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <img src="./assets/images/ic_x.svg" alt="" srcset="" />
            </button>
          </div>
          <div class="offcanvas-body navbar__ofc--body">
            <ul class="navbar-nav ms-auto mb-lg-0 navbar--gap">
              <li class="nav-item">
                <a
                  class="nav-link navbar__link"
                  aria-current="page"
                  href="#service"
                >
                  Our Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navbar__link" href="#whyus">
                  Why Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navbar__link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navbar__link" href="#faq">
                  FAQ
                </a>
              </li>
              <div>
                <button class="btn btn-success navbar__btn" type="submit">
                  Register
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
