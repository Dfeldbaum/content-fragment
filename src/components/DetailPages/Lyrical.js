import React, { Component } from 'react';

class Lyrical extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="project-detail-section">
        <div className="item text-container">
          <h1 className="text-container__title">Lyrical App</h1>
          <h1 className="text-container__subtitle">Built With: HTML5, CSS3, JavaScript, Angular, Express/Node.js, Ruby/Sinatra</h1>
          <p className="text-container__copy">Lyrical is a secure angular app that allows users to search, create, and save lyrics in one interface. Data is stored in relational mySQL tables and user authentication is secured with bCrypt. The Lyrical server side is built with Sinatra/Ruby and utilizes a RESTful API for user account and lyric data.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-lyrical.png"/>
        </div>

      </div>
    );
  }
}

export default Lyrical;
