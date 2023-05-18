import React from "react";
import { Container } from "react-bootstrap";
import Buttons from "../Buttons";
import styles from "./index.module.css";

export default function SewaComponent() {
  return (
    <Container id="sewa" className={styles.sewa}>
      <div className={styles.sewa__width}>
        <h1>
          Sewa Mobil di <br className="d-block d-sm-none" />
          Ciamis Sekarang
        </h1>
        <p>
          Lorem ipsum dolor sit amet <br className="d-block d-sm-none" />
          consectetur adipiscing elit, sed
          <br className="d-block d-sm-none" />
          do eiusmod <br className="d-none d-sm-block" />
          tempor incididunt ut <br className="d-block d-sm-none" />
          labore et dolore magna aliqua.
        </p>
        <Buttons type="submit">Mulai Sewa Mobil</Buttons>
      </div>
    </Container>
  );
}
