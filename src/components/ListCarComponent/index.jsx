import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getfilteredCars,
  getAllCar,
  getCarStatus,
  getCarError,
  getSearchStatus,
} from "../../reducers/carReducer";
import { themeSlice } from "../../reducers/themeReducer";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { formatRupiah } from "../../utils/formatRupiah";
import styles from "./index.module.css";
import Swal from "sweetalert2";

export default function ListCarComponent() {
  const dispatch = useDispatch();
  const cars = useSelector(getAllCar);
  const filteredCars = useSelector(getfilteredCars);
  const loading = useSelector(getCarStatus);
  const error = useSelector(getCarError);
  const searchStatus = useSelector(getSearchStatus);
  const { searchMode } = themeSlice.actions;
  const [data, setData] = useState([]); //for one data handling

  //initial first render
  useEffect(() => {
    setData(cars);
  }, [cars]);

  //implement search
  useEffect(() => {
    if (searchStatus === "failed") {
      setData([]);
      dispatch(searchMode(false));
      Swal.fire({
        icon: "error",
        scrollbarPadding: false,
        title: "Data tidak ditemukan!",
        text: "Silahkan mencari jadwal yang lain.",
        timer: 1700,
      });
      return;
    }
    if (searchStatus === "success") {
      setData(filteredCars);
      dispatch(searchMode(false));
      Swal.fire({
        icon: "success",
        scrollbarPadding: false,
        title: "Data ditemukan!",
        text: "Silahkan pilih mobil Anda.",
        timer: 1700,
      });
      return;
    }
  }, [filteredCars, searchStatus, dispatch, searchMode]);

  //render UI
  switch (loading) {
    case "error":
      return (
        <Container className="pt-5">
          <p>{error}</p>
        </Container>
      );
    case "loading":
      return (
        <Container className="pt-5">
          <div className={styles.loader__container}>
            <div className={styles.spinner}></div>
          </div>
        </Container>
      );
    default:
      return (
        <Container className="pt-5">
          <Row className={`gy-sm-5 gx-sm-5 gy-4 ${styles.card__container}`}>
            {data.length > 0
              ? data.map((car) => (
                  <Col sm={4} key={car.id}>
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
                        <p className={`my-3 ${styles.card__body__price}`}>
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
                        {car.available ? (
                          <Button className={styles.card__btn}>
                            Pilih Mobil
                          </Button>
                        ) : (
                          <Button disabled className={styles.card__btn}>
                            Unavailable
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      );
  }
}
