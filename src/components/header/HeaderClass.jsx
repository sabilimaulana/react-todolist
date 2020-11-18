import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

import Button from "../button/ButtonClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const StyledH1 = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color.primary.black};
  font-size: 3.6rem;
  font-family: "Homemade Apple", sans-serif;
  text-transform: lowercase;
`;

class Header extends React.Component {
  render() {
    const { showAddToggle, showAdd, clearTodos, theme } = this.props;
    return (
      <section className="header-component">
        <Container alignItems="flex-start">
          <Item flex={1}>
            <Button onClick={showAddToggle} text={showAdd ? "finish" : "Add"} />
          </Item>
          <Item flex={2}>
            <StyledH1 theme={theme}>Todo lists</StyledH1>
          </Item>
          <Item flex={1} align="right">
            <Button
              onClick={clearTodos}
              text="Clear"
              color="red"
              align="right"
            />
          </Item>
        </Container>
      </section>
    );
  }
  static propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
  };
}

export default withTheme(Header);
