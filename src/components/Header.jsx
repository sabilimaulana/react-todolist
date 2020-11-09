import React from "react";
// import PropTypes from "prop-types";

const Header = () => {
  return (
    <section className="header">
      <button className="header-btn main-black-color">Add</button>
      <h1 className="header-title">Todo lists</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

export default Header;
