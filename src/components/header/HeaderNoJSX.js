/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";

// import Button from "../button/Button";
import Button from "../button/ButtonNoJSX";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  // return "section";
  return jsx(
    "section",
    {
      className: "header-component"
    },
    jsx(
      Container,
      {
        alignItems: "flex-start"
      },
      jsx(
        // item pertama
        Item,
        {
          flex: 1
        },
        jsx(Button, {
          onClick: showAddToggle,
          text: showAdd ? "finish" : "add"
        })
      ),
      jsx(
        // item kedua
        Item,
        {
          flex: 2
        },
        jsx(
          "h1",
          {
            css: styles.headerTitle(theme)
          },
          "Todo lists"
        )
      ),
      jsx(
        // item ketiga
        Item,
        {
          flex: 1,
          align: "right"
        },
        jsx(Button, {
          text: "Clear",
          onClick: clearTodos,
          color: "red",
          align: "right"
        })
      )
    )
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
