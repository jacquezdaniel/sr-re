import React from "react";
import { connect } from "react-redux";
import { deleteFile, updateFile } from "../actions";
import PropTypes from "prop-types";

class positionStatement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didLoad: false,
      title: this.props.file.metadata.title,
      content: this.props.file.metadata.content
    };
  }
  togglePdfUpdateModal = () => {
    this.setState({ pdfUpdateToggle: !this.state.pdfUpdateToggle });
  };

  handleTitleInputChange = event => {
    this.setState({ title: event.target.value });
  };
  handleContentInputChange = event => {
    this.setState({ content: event.target.value });
  };
  handlePdfFormSubmit = event => {
    event.preventDefault();
    const data = { title: this.state.title, content: this.state.content };
    this.props.pdfUpload(this.props.file.filename, data);
    this.pdfUpdateToggle();
  };

  renderPdfUpdateModalContent = () => {
    return (
      <form className="file-update-form">
        <label htmlFor="title">Pdf Titple Attribute</label>
        <input
          name="title"
          type="text"
          onChange={this.handleTitleInputChange}
          value={this.state.title}
        />
        <label htmlFor="content">Pdf Content</label>
        <textarea
          name="content"
          rows="5"
          onChange={this.handleContentInputChange}
          value={this.state.content}
        ></textarea>
        <input
          type="sumbit"
          value="Update Pdf file"
          onClick={this.handlePdfFormSubmit}
        />
      </form>
    );
  };

  render() {
    return (
      <>
        <a herf={`/files/pdf/${this.props.file.filename}`}>
          {this.props.file.metadata.content}
        </a>

        <figcaption>{this.props.file.metadata.content}</figcaption>
      </>
    );
  }
}

connect.PropTypes = {
  pdfUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default connect(
  null,
  { deleteFile, updateFile }
)(positionStatement);
