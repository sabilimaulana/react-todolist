/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button onClick={showAddToggle} text={showAdd ? "finish" : "Add"} />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo lists</h1>
        </Item>
        <Item flex={1} align="right">
          <Button onClick={clearTodos} text="Clear" color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTupes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
