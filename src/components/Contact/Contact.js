import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="about-section">
        <div className="item text-container">
          <h1 className="text-container__title">Contact</h1>
          <p className="text-container__copy">
            Want to collaborate? <br/>
            Please email me at defeldbaum@gmail.com or call (901)-848-6450. Thanks!
          </p>
        </div>

        <div class="item img-container">
          <img src="http://placehold.it/1500x1000"/>
        </div>
      </div>
    );
  }
}

export default Contact;
