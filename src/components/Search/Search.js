import React from "react";
import "./Search.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const Search = (props) => {
  return (
    <div className="Search">
      <Input type="text" placeholder="Tìm kiếm" />
    </div>
  );
};
export default Search;
