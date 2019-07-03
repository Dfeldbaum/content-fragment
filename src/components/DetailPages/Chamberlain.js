import React, { Component } from 'react';

class Chamberlain extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="project-detail-section">

        <div className="item text-container">
          <h1 className="text-container__title">Chamberlain.com</h1>
          <h1 className="text-container__subtitle">HTML5, CSS3, Bootstrap, Meteor/Node.js, Prismic</h1>
          <p className="text-container__copy">Both Liftmaster.com and Chamberlain.com builds were built in unison in local PatternLab environments, respectively. Components were built primarily with FlexBox in Bootstrap layouts. Personally built pages include product detail pages, trade shows/events landing pages, and search results pages. </p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-chamberlain.jpg"/>
        </div>

      </div>
    );
  }
}

export default Chamberlain;
