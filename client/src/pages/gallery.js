import React from "react";
import ScrollToTop from "react-scroll-up";
import ImageContainer from "../components/ImageContainer";

const gallery = () => {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <i class="material-icons prefix md-36 orange600">arrow_upward</i>
        <span for="icon_prefix"></span>
      </ScrollToTop>
      <br />
      <ImageContainer />
    </>
  );
};

export default gallery;
