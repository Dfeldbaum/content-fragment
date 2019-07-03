import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="nav-wrapper">
          <ul className="nav-wrapper__list">
            <li onClick={this.props.showProjects}>Work</li>
            <li onClick={this.props.showAbout}>About</li>
            <li onClick={this.props.showContact}>Contact</li>
          </ul>

          <div className="nav-wrapper__name">
            <h1 onClick={this.props.showProjects}>David Feldbaum</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
