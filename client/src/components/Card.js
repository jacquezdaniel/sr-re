import React from "react";

export const Slider = (props) => {
  return (
    <div className="slider">
      <ul className="slides z-depth-3">{props.children}</ul>
    </div>
  );
};

export const SliderItem = (props) => {
  return (
    <li>
      <img src={props.image} alt="" />
    </li>
  );
};
