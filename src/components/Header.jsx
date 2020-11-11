import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "add"}
      </button> */}
      <Button onClick={showAddToggle} text={showAdd ? "finish" : "Add"} />
      <h1 className="header-title">Todo lists</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
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
