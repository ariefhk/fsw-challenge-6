import React from "react";
import { Button } from "react-bootstrap";
import styles from "./index.module.css";
import PropTypes from "prop-types";

export default function Buttons({ children, ...rest }) {
  return (
    <Button className={`btn btn-success ${styles.btn}`} {...rest}>
      {children}
    </Button>
  );
}

Buttons.propTypes = {
  children: PropTypes.string,
};
