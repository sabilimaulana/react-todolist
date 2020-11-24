/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import * as styles from "./AboutContent.styles";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About this App</h1>
          <h3 css={styles.aboutPageSubHeader}>
            What i learn by building this app
          </h3>
        </Item>
        <Item>
          <Container justifyContent="center">
            <p css={styles.aboutPageParagraph}>yauda la ya yang penting jadi</p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.backToHome}>Back to home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
