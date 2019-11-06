import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={e => this.setState({ searchField: e.target.value })}
  />
);
