import React, { Component } from 'react';

class Pataks extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="project-detail-section">
        <div className="item text-container">
          <h1 className="text-container__title">PataksUSA.com</h1>
          <h1 className="text-container__subtitle">Built With: HTML5, CSS3, Bootstrap, Meteor/Node.js, Prismic</h1>
          <p className="text-container__copy">PataksUSA.com is a Meteor web application with a Prismic headless CMS integration to manage products and categorizaton across the web property. Created in under a month as part of a two man development team I was responsible for the entirety of Patak's front end, which features a fully responsive design, Slick.js product carousels and numerous product filtering mechanisms.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-pataks.jpg"/>
        </div>
      </div>
    );
  }
}

export default Pataks;
