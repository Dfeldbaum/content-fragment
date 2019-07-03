import React, { Component } from 'react';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  mouseEnter() {
    this.setState({isHovered:true})
  }
  mouseLeave() {
    this.setState({isHovered:false})
  }

  render() {

    console.log(this.props);
    const hoverDarken = this.state.isHovered ? "item--darken" : "item--blank";

    return (

      <div className="projects-section">
        <div className="grid">
          <div className="item item1" onClick={this.props.showCoronaSummer} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item2" onClick={this.props.showPataks} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item3" onClick={this.props.showLiftmaster}>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item4" onClick={this.props.showModelo}>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item5" onClick={this.props.showChamberlain}>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item6" onClick={this.props.showLiftmasterEmail}>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item7" onClick={this.props.showGoogle}>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item8" onClick={this.props.showLyrical}>
            <img src="http://placehold.it/800x800"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
