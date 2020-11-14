import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Button from "../button/Button";

import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button onClick={showAddToggle} text={showAdd ? "finish" : "Add"} />
      <h1 className={styles.headerTitle}>Todo lists</h1>
      <Button onClick={clearTodos} text="Clear" color="red" align="right" />
    </section>
  );
};

Header.propTupes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
