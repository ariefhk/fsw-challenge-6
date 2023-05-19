import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Buttons from "../Buttons";
import { fetchCars, getCarStatus, carSlice } from "../../reducers/carReducer";
import { themeSlice, getIsSearch } from "../../reducers/themeReducer";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";
import Swal from "sweetalert2";

export default function GetCarFormComponent() {
  const dispatch = useDispatch();
  const { filteredCars } = carSlice.actions;
  const { searchMode } = themeSlice.actions;
  const loading = useSelector(getCarStatus);
  const isSearch = useSelector(getIsSearch);
  const [input, setInput] = useState({
    driver: "",
    date: "",
    time: "",
    capacity: "",
  });

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchCars());
    }
  }, [loading, dispatch]);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "driver") {
      setInput({ ...input, driver: value });
    } else if (name === "date") {
      setInput({ ...input, date: value });
    } else if (name === "time") {
      setInput({ ...input, time: value });
    } else if (name === "capacity") {
      setInput({ ...input, capacity: value });
    }
  };

  const handleSubmit = () => {
    const dateTime = new Date(`${input.date} ${input.time}`);

    if (!input.date || !input.time || !input.driver) {
      Swal.fire({
        icon: "error",
        scrollbarPadding: false,
        timer: 1500,
        title: "Form belum lengkap!",
        text: "Silahkan input semua form.",
      });
      return;
    }

    //implement filter
    dispatch(
      filteredCars({
        dateTime,
        capacity: Number(input.capacity),
      })
    );
  };

  return (
    <Container>
      <div className="cars-form">
        <form
          id="form-container"
          style={{ zIndex: isSearch ? 100 : 2 }}
          className={styles.form__container}
          onClick={() => dispatch(searchMode(true))}
        >
          <div className={styles.form__box}>
            <label htmlFor="driver">Tipe Driver</label>
            <div className={styles.form__box__input}>
              <img src="./images/down_input.svg" alt="" srcSet="" />
              <select
                value={input.driver}
                onChange={handleChange}
                className={styles.form__select}
                aria-label="Default select example"
                name="driver"
                id="driver"
              >
                <option className="select-placeholder">
                  Pilih Tipe Driver
                </option>
                <option value="true" className={styles.select__val}>
                  Dengan Sopir
                </option>
                <option value="false" className={styles.select__val}>
                  Tanpa Sopir (Lepas Konci)
                </option>
              </select>
            </div>
          </div>

          <div className={styles.form__box}>
            <label htmlFor="date">Tanggal</label>
            <div className={styles.form__box__input}>
              <input
                value={input.date}
                onChange={handleChange}
                type="date"
                name="date"
                id="date"
                className={styles.form__control}
                placeholder="Pilih Tanggal"
              />
            </div>
          </div>

          <div className={styles.form__box}>
            <label htmlFor="time">Waktu Jemput/Ambil</label>
            <div className={styles.form__box__input}>
              <img
                src="./images/clock_input.svg"
                alt=""
                srcSet=""
                id="img-placeholder"
              />
              <select
                value={input.time}
                onChange={handleChange}
                className={styles.form__select}
                aria-label="Default select example"
                name="time"
                id="time"
              >
                <option className="select-placeholder">Pilih Waktu</option>
                <option value="08:00" className={styles.select__val}>
                  08.00 WIB
                </option>
                <option value="09:00" className={styles.select__val}>
                  09.00 WIB
                </option>
                <option value="10:00" className={styles.select__val}>
                  10.00 WIB
                </option>
                <option value="11:00" className={styles.select__val}>
                  11.00 WIB
                </option>
                <option value="12:00" className={styles.select__val}>
                  12.00 WIB
                </option>
              </select>
            </div>
          </div>
          <div className={styles.form__box}>
            <label htmlFor="capacity">Jumlah Penumpang (Optional)</label>
            <div className={styles.form__box__input}>
              <img src="./images/users_input.svg" alt="" srcSet="" />
              <input
                name="capacity"
                value={input.capacity}
                onChange={handleChange}
                className={styles.form__control}
                type="number"
                placeholder="Jumlah Penumpang"
                id="capacity"
              />
            </div>
          </div>
          <div className={styles.form__box}>
            <label htmlFor="btn-search-car" className={styles.btn__search__car}>
              ....
            </label>
            <Buttons
              id="btn-search-bar"
              name="btn-search-bar"
              onClick={handleSubmit}
            >
              Cari Mobil
            </Buttons>
          </div>
        </form>
      </div>
    </Container>
  );
}
