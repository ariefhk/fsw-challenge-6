import React from "react";
import { Image, Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "../../utils/owl_carousel.css"; //custom owl carousel style
import styles from "./index.module.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function TestimonialComponent() {
  return (
    <>
      <Container className={styles.testimonial}>
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </Container>
      <OwlCarousel
        className="owl-theme"
        margin={32}
        stagePadding={16}
        loop
        dots={false}
        center
        autoPlay
        autoplayHoverPause
        nav
        navText={[
          "<img src='./images/Left_button.svg' class=carousel-item--btn>",
          "<img src='./images/Right_button.svg' class=carousel-item--btn>",
        ]}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 2,
          },
        }}
      >
        {/* Item 1 */}
        <div
          className={`d-flex align-items-sm-center justify-content-sm-center flex-column flex-sm-row ${styles.testimonial__box} ${styles.testimonial__gap}`}
        >
          <div className={styles.testimonial__images}>
            <div className={styles.testimonial__images__size}>
              <Image
                src="./images/testimonial_1.svg"
                alt=""
                srcSet=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className={styles.testimonial__content}>
            <div
              className={`d-flex justify-content-center justify-content-sm-start ${styles.testimonial__content__pad}`}
            >
              <div className="d-flex mb-2">
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
              </div>
            </div>
            <p className={styles.testimonial__content__text}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br className="d-none d-sm-block" />
              eiusmod lorem <br className="d-block d-sm-none" />
              ipsum dolor sit amet, consectetur
              <br className="d-block d-sm-none" />
              adipiscing elit,
              <br className="d-none d-sm-block" />
              sed do eiusmod lorem
              <br className="d-block d-sm-none" />
              ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod”
            </p>
            <p className={styles.testimonial__content__label}>
              John Dee 32, Bromo
            </p>
          </div>
        </div>
        {/* Item 2 */}
        <div
          className={`d-flex align-items-sm-center justify-content-sm-center flex-column flex-sm-row ${styles.testimonial__box} ${styles.testimonial__gap}`}
        >
          <div className={styles.testimonial__images}>
            <div className={styles.testimonial__images__size}>
              <Image
                src="./images/testimonial_1.svg"
                alt=""
                srcSet=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className={styles.testimonial__content}>
            <div
              className={`d-flex justify-content-center justify-content-sm-start ${styles.testimonial__content__pad}`}
            >
              <div className="d-flex mb-2">
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
              </div>
            </div>
            <p className={styles.testimonial__content__text}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br className="d-none d-sm-block" />
              eiusmod lorem <br className="d-block d-sm-none" />
              ipsum dolor sit amet, consectetur
              <br className="d-block d-sm-none" />
              adipiscing elit,
              <br className="d-none d-sm-block" />
              sed do eiusmod lorem
              <br className="d-block d-sm-none" />
              ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod”
            </p>
            <p className={styles.testimonial__content__label}>
              John Dee 32, Bromosss
            </p>
          </div>
        </div>
        {/* Item 3 */}
        <div
          className={`d-flex align-items-sm-center justify-content-sm-center flex-column flex-sm-row ${styles.testimonial__box} ${styles.testimonial__gap}`}
        >
          <div className={styles.testimonial__images}>
            <div className={styles.testimonial__images__size}>
              <Image
                src="./images/testimonial_2.svg"
                alt=""
                srcSet=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className={styles.testimonial__content}>
            <div
              className={`d-flex justify-content-center justify-content-sm-start ${styles.testimonial__content__pad}`}
            >
              <div className="d-flex mb-2">
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
                <Image src="./images/star.svg" className="img-fluid" />
              </div>
            </div>
            <p className={styles.testimonial__content__text}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br className="d-none d-sm-block" />
              eiusmod lorem <br className="d-block d-sm-none" />
              ipsum dolor sit amet, consectetur
              <br className="d-block d-sm-none" />
              adipiscing elit,
              <br className="d-none d-sm-block" />
              sed do eiusmod lorem
              <br className="d-block d-sm-none" />
              ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod”
            </p>
            <p className={styles.testimonial__content__label}>
              John Dee 32, Bromo
            </p>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}
