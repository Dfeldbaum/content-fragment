import React, { Component } from 'react';

class CoronaSummer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="project-detail-section">
        <div className="item text-container">
          <h1 className="text-container__title">CoronaUSA.com</h1>
          <h1 className="text-container__subtitle">Built With: HTML5, CSS3, React.js, Meteor/Node.js</h1>
          <p className="text-container__copy">From home page rebuilds to the 17-week Corona Summer sweepstakes promotion, I had the pleasure of building many interations of CoronaUSA.com. Built primarily in React and ES6 on Meteor, Corona USA is a constantly evolving web application that features a continually changing front end experiences. I was the full stack lead for Corona Summer 2018, front end lead for Corona Holiday 2018, and have built home page experiences for John Gruden and V Foundation promotions.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-corona-summer.jpg"/>
        </div>
      </div>
    );
  }
}

export default CoronaSummer;
