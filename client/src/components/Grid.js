import React from "react";

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export const Section = ({ children }) => {
  return <div className="section">{children}</div>;
};

export const Parallax = ({ children }) => {
  return (
    <div className="parallax-container z-depth-4">
      <div className="parallax">{children}</div>
    </div>
  );
};

export const Row = ({ id, children }) => {
  return (
    <div className="row" id={id}>
      {children}
    </div>
  );
};

export const Col = ({ id, size, children }) => {
  return (
    <div className={"col " + (size ? size : "s12")} id={id}>
      {children}
    </div>
  );
};
