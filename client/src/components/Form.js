import React from "react";

export const Input = props => {
  return (
    <div className={"input-field col " + (props.size ? props.size : "s12")}>
      <input
        className="validate"
        id={props.id}
        type={props.type ? props.type : "text"}
        min={props.min}
        max={props.max}
        name={props.name}
        onChange={props.handleInputChange}
      />
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
};
