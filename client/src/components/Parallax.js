import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Parallax extends Component {
  componentDidMount() {
    M.Parallax.init(this.Parallax1);
  }

  render() {
    return (
      <>
        <div className="parallax-container">
          <div
            ref={Parallax => {
              this.Parallax1 = Parallax;
            }}
            className="parallax"
          >
            <img className="responsive-img" src="/images/outside.jpg" alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Parallax;
