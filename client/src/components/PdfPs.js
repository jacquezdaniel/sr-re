import React from "react";
import { connect } from "react-redux";
import { pdfUpload } from "../actions";
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
  };

 render() {
     return (
         <>
         <div className="container"
         
     )
 }
      )
  }
}
