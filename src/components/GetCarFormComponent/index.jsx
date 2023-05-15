import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./index.module.css";

export default function GetCarFormComponent() {
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
                className={styles.form__control}
                type="number"
                placeholder="Jumlah Penumpang"
                name="passenger"
                id="passenger"
              />
            </div>
          </div>
          <div className={styles.form__box}>
            <label for="btn-search-car" className={styles.btn__search__car}>
              ....
            </label>
            <Button
              id="btn-search-car"
              name="btn-search-car"
              type="button"
              className="btn btn-success"
            >
              Cari Mobil
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
