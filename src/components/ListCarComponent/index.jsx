import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { formatRupiah } from "../../utils/formatRupiah";
import styles from "./index.module.css";

export default function ListCarComponent() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    );

    return response;
  };

  useEffect(() => {
    const fetchData = async () => {
      const cars = await getCars();
      setCars(cars.data);
    };
    fetchData();
  }, []);

  const displayButton = (available) => {
    return available ? (
      <Button className={styles.card__btn}>Pilih Mobil</Button>
    ) : (
      <Button disabled className={styles.card__btn}>
        Unavailable
      </Button>
    );
  };

  return (
    <Container className="pt-5">
      <Row className="gy-sm-4 gx-sm-4 gy-4">
        {cars.length > 0
          ? cars.map((car) => (
              <Col sm={4}>
                <Card key={car.id} className={styles.card}>
                  <Card.Img
                    variant="top"
                    src={car.image}
                    srcSet=""
                    alt={car.manufacture}
                    className={styles.card__image}
                  />
                  <Card.Body className={styles.card__body}>
                    <p className={styles.card__body__model}>
                      {car.manufacture} {car.model}
                    </p>
                    <p class={`my-3 ${styles.card__body__price}`}>
                      Rp {formatRupiah(car.rentPerDay)} / hari
                    </p>
                    <p className={`mb-4 ${styles.card__body__desc}`}>
                      {car.description}
                    </p>
                    <div className="d-flex gap-3">
                      <div>
                        <img
                          src="./images/users.svg"
                          alt=""
                          srcSet=""
                          width="20"
                        />
                      </div>
                      <p className={styles.card__body_utils}>
                        {car.capacity} Orang
                      </p>
                    </div>
                    <div className="d-flex gap-3 my-3">
                      <div>
                        <img
                          src="./images/settings.svg"
                          alt=""
                          srcSet=""
                          width="20"
                        />
                      </div>
                      <p className={styles.card__body_utils}>
                        {car.transmission}
                      </p>
                    </div>
                    <div className="d-flex gap-3 mb-5">
                      <div>
                        <img
                          src="./images/calendar.svg"
                          alt=""
                          srcSet=""
                          width="20"
                        />
                      </div>
                      <p className={styles.card__body_utils}>
                        Tahun {car.year}
                      </p>
                    </div>
                    {displayButton(car.available)}
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
}
