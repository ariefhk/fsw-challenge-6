import React from "react";
import { Button } from "react-bootstrap";
import styles from "./index.module.css";

export default function Buttons({ children, ...rest }) {
  return (
    <Button className={`btn btn-success ${styles.btn}`} {...rest}>
      {children}
    </Button>
  );
}
