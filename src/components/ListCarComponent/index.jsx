import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards";
import {
  getfilteredCars,
  getAllCar,
  getCarStatus,
  getCarError,
  getSearchStatus,
} from "../../reducers/carReducer";
import { themeSlice } from "../../reducers/themeReducer";
import { Row, Col, Container, Image } from "react-bootstrap";
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

  //initial first render without filter
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
        timer: 1500,
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
        timer: 1500,
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
            {data.length > 0 ? (
              data.map((car, index) => (
                <Col sm={4} key={index}>
                  <Cards
                    available={car.available}
                    capacity={car.capacity}
                    description={car.description}
                    image={car.image}
                    manufacture={car.manufacture}
                    model={car.model}
                    rentPerDay={car.rentPerDay}
                    transmission={car.transmission}
                    year={car.year}
                  />
                </Col>
              ))
            ) : (
              <Container className="py-5">
                <Row className="justify-content-center align-items-center ">
                  <Col className="d-flex flex-column align-items-center gap-4 gap-lg-3">
                    <Image
                      src="./images/img-BeepBeep.svg"
                      className={styles.img__not_found}
                      width={260}
                      alt="https://dribbble.com/shots/5695684-404-Page"
                    />
                    <h3 className={styles.text__not_found}>Car not found!</h3>
                  </Col>
                </Row>
              </Container>
            )}
          </Row>
        </Container>
      );
  }
}
