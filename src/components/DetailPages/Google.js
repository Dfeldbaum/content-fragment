import React, { Component } from 'react';

class Google extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="project-detail-section">

        <div className="item text-container">
          <h1 className="text-container__title">Google Animated Banners</h1>
          <h1 className="text-container__subtitle">HTML5, CSS3, JavaScript, GSAP</h1>
          <p className="text-container__copy">Utilizing the power of Greensock Animation Platform (GSAP), I've built animated HTML5/JavaScript banners on behalf of the Google and it Google Cloud brand. Banners of varying dimensions are built in a Express/Node.js environment to be served on Google's DoubleClick Network.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-google.jpg"/>
        </div>

      </div>
    );
  }
}

export default Google;
