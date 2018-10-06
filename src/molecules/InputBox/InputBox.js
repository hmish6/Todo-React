import React from "react";
import Input from "../../atoms/Input/Input";

import "./InputBox.css";

const InputBox = ({ id, title, ...props }) => (
  <div className="input-group">
    <label htmlFor={id}>{title}</label>
    <Input id={id} {...props} />
  </div>
);

export default InputBox;
