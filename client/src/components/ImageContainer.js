import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { getFiles } from "../actions";
import "./styles/Image.css";
import { Preloader } from "react-materialize";

const Image = lazy(() => import("./Image"));

const randomizer = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class ImageContainer extends React.Component {
  componentDidMount() {
    this.props.getFiles();
  }

  // Maps files to be displayed in the #image-container
  renderImages = () => {
    const shuffleImage = randomizer(this.props.files);
    if (!this.props.files || this.props.files.length === 0) {
      return (
        <p id="spinner" className="center">
          <Preloader flashing />
        </p>
      );
    }

    return shuffleImage.map((file, i) => {
      return (
        <Suspense
          fallback={
            <p class="center">
              <Preloader flashing />
            </p>
          }
        >
          <Image file={file} key={i} />
        </Suspense>
      );
    });
  };

  render() {
    return <div id="image-container">{this.renderImages()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    files: Object.values(state.files),
  };
};

export default connect(mapStateToProps, {
  getFiles,
})(ImageContainer);
