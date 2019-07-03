import React, { Component } from 'react';

class Modelo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="project-detail-section">
        <div className="item text-container">
          <h1 className="text-container__title">ModeloFootball.com</h1>
          <h1 className="text-container__subtitle">HTML5, CSS3, Bootstrap, Meteor/Node.js</h1>
          <p className="text-container__copy">Built in under 2 weeks, the ModeloFootball.com 2017 rebuild features a sweepstakes mechanism where users can submit gameday pictures in order to win an all-expense paid weekend trip to meet former NFL star, Tony Gonzalez. Modelo Football 2018 will be live in early August.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-modelo.jpg"/>
        </div>

      </div>
    );
  }
}

export default Modelo;
