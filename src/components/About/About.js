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
          <p className="text-container__copy">My passion is bridging the gap between design and programming. My approach to web design is creative, and holistic. I have a wide range of front-end development skills that include HTML5, CSS3, JavaScript, React.js, Bootstrap, and Flexbox Layouts. I have back-end web development proficiency in Node.js/Express, Sinatra, Ruby on Rails, Gulp, MongoDB and mySQL. I have digital marketing expertise in SEO, SEM (Google AdWords, Bing Ads) and Social Media Advertising.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/about-dfeldbaum-3.jpg"/>
        </div>

      </div>
    );
  }
}

export default About;
