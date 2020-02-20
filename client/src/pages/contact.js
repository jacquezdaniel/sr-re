import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";
import ScrollToTop from "react-scroll-up";
import "./contact.css";

class contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      disableButton: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, disableButton: false });
  };

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: "",
      disableButton: true
    });

    const { name, email, message } = this.state;

    M.toast({ html: "Email Sent! Thank You!", classes: "rounded" });

    const form = await axios.post("/form/send", {
      name,
      email,
      message
    });
    console.log(form);
  }

  render() {
    return (
      <div className="container">
        <ScrollToTop showUnder={160}>
          <i class="material-icons prefix md-36 orange600">arrow_upward</i>
          <span for="icon_prefix"></span>
        </ScrollToTop>
        {/* <h5>Contact Us</h5> */}
        <br />
        <br />

        <div id="contact-form" className="container">
          <form
            name="contact-form"
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <i class="material-icons prefix">account_circle</i>
            <label for="icon_prefix"></label>
            <input
              type="text"
              id="icon_prefix"
              name="name"
              validate="true"
              required
              value={this.state.name}
              placeholder="Full Name"
              onChange={this.handleChange}
            />
            <i class="material-icons prefix">mail_outline</i>
            <label for="icon_prefix"></label>
            <input
              type="email"
              id="email"
              class="validate"
              name="email"
              required
              value={this.state.email}
              placeholder="Your email.."
              onChange={this.handleChange}
            />
            <span
              class="helper-text"
              data-error="Please Enter A Valid Email. ❌"
              data-success="✔️"
            ></span>
            <br></br>
            <br></br>
            <i class="material-icons prefix">message</i>
            <label for="icon_prefix"></label>
            <textarea
              id="message"
              name="message"
              class="validate"
              required
              value={this.state.message}
              placeholder="Your Message.."
              onChange={this.handleChange}
            />
            <button
              class="btn waves-effect waves-light indigo accent-4"
              disabled={this.state.disableButton}
              name="action"
              type="submit"
              value="Submit"
            >
              <i class="material-icons right">send</i>Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default contact;
