import React, { Component } from 'react';

class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="about-section">

        <div className="item text-container">
          <h1 className="text-container__title">About</h1>
          <p className="text-container__copy"></p>
        </div>
      </div>
    );
  }
}

export default About;
