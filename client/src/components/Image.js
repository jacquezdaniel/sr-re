import React from "react";
import { connect } from "react-redux";
import { deleteFile, updateFile } from "../actions";
import "./styles/Image.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

AOS.init();

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didLoad: false,
      imageUpdateToggle: false,
      alt: this.props.file.metadata.alt,
      caption: this.props.file.metadata.caption
    };
  }

  toggleImageUpdateModal = () => {
    this.setState({ imageUpdateToggle: !this.state.imageUpdateToggle });
  };

  handleAltInputChange = event => {
    this.setState({ alt: event.target.value });
  };

  handleCaptionInputChange = event => {
    this.setState({ caption: event.target.value });
  };

  handleImageUpdateFormSubmit = event => {
    event.preventDefault();
    const data = { caption: this.state.caption, alt: this.state.alt };
    this.props.updateFile(this.props.file.filename, data);
    this.toggleImageUpdateModal();
  };

  onLoad = () => {
    this.setState({
      didLoad: true
    });
  };

  renderImageUpdateModalContent = () => {
    return (
      <form className="file-update-form">
        <label htmlFor="alt">Image alt attribute</label>
        <input
          name="alt"
          type="text"
          onChange={this.handleAltInputChange}
          value={this.state.alt}
        />
        <label htmlFor="caption">Image caption</label>
        <textarea
          name="caption"
          rows="3"
          onChange={this.handleCaptionInputChange}
          value={this.state.caption}
        ></textarea>
        <input
          type="submit"
          value="Update file"
          onClick={this.handleImageUpdateFormSubmit}
        />
      </form>
    );
  };

  render() {
    const style = this.state.didLoad ? {} : { visibility: "hidden" };

    return (
      <>
        <div data-aos="fade-up">
          <img
            style={style}
            src={`/files/read/${this.props.file.filename}`}
            alt={this.props.file.metadata.alt}
            onLoad={this.onLoad}
          />
          <figcaption>{this.props.file.metadata.caption}</figcaption>
        </div>
      </>
    );
  }
}

connect.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default connect(
  null,
  { deleteFile, updateFile }
)(Image);
