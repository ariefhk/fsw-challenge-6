import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./index.module.css";

export default function GetCarFormComponent() {
  const [input, setInput] = useState({
    driver: "",
    date: "",
    time: "",
    passenger: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "driver") {
      setInput({ ...input, driver: Boolean(value) });
    } else if (name === "date") {
      setInput({ ...input, date: value });
    } else if (name === "time") {
      setInput({ ...input, time: value });
    } else if (name === "passenger") {
      setInput({ ...input, passenger: Number(value) });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let dateTime = new Date(`${input.date} ${input.time}`);
    const data = {
      driver: input.driver,
      dateTime: new Date(dateTime).getTime(),
      passenger: input.passenger,
    };

    console.log(data);
    setInput({
      date: "",
      time: "",
      driver: "",
      passenger: "",
    });
  };

  return (
    <Container>
      <div className="cars-form">
        <form
          id="form-container"
          className={styles.form__container}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={styles.form__box}>
            <label for="driver">Tipe Driver</label>
            <div className={styles.form__box__input}>
              <img src="./images/down_input.svg" alt="" srcset="" />
              <select
                value={input.driver}
                onChange={handleChange}
                className={styles.form__select}
                aria-label="Default select example"
                name="driver"
                id="driver"
              >
                <option selected className="select-placeholder">
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
            <label for="date">Tanggal</label>
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
            <label for="time">Waktu Jemput/Ambil</label>
            <div className={styles.form__box__input}>
              <img
                src="./images/clock_input.svg"
                alt=""
                srcset=""
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
                <option selected className="select-placeholder">
                  Pilih Waktu
                </option>
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
            <label for="passenger">Jumlah Penumpang (Optional)</label>
            <div className={styles.form__box__input}>
              <img src="./images/users_input.svg" alt="" srcset="" />
              <input
                name="passenger"
                value={input.passenger}
                onChange={handleChange}
                className={styles.form__control}
                type="number"
                placeholder="Jumlah Penumpang"
                id="passenger"
              />
            </div>
          </div>
          <div className={styles.form__box}>
            <label for="btn-search-car" className={styles.btn__search__car}>
              ....
            </label>
            <Button
              onClick={handleSubmit}
              id="btn-search-car"
              name="btn-search-car"
              type="button"
              className={styles.btn__success}
            >
              Cari Mobil
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
