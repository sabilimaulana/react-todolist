import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "add"}
      </button>
      <h1 className="header-title">Todo lists</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTupes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Header;
