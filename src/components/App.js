import React, { Component } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './About/About'
import ContentFragments from './ContentFragments/ContentFragments'




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 'content-fragments',
    }
  }

  showContentFragments(){
    this.setState({progress:"content-fragments"})
  }

  showAbout(){
    this.setState({progress:"about"})
  }

  showContact(){
    this.setState({progress:"contact"})
  }


  PickView(props){
    let progress = this.state.progress;

    if (progress == 'content-fragments'){
      return <ContentFragments/>
    }

    if (progress == 'about'){
      return <About/>
    }
  }

  render() {
    return (
      <div className="wrapper">
          <Header showContentFragments={this.showContentFragments.bind(this)} showAbout={this.showAbout.bind(this)}/>

          {this.PickView()} 

          <Footer/>

      </div>
    );
  }
}

export default App;
