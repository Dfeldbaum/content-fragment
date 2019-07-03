import React, { Component } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './About/About'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import CoronaSummer from './DetailPages/CoronaSummer'
import Pataks from './DetailPages/Pataks'
import Liftmaster from './DetailPages/Liftmaster'
import Modelo from './DetailPages/Modelo'
import Chamberlain from './DetailPages/Chamberlain'
import LiftmasterEmail from './DetailPages/LiftmasterEmail'
import Google from './DetailPages/Google'
import Lyrical from './DetailPages/Lyrical'




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 'projects',
    }
  }

  showProjects(){
    this.setState({progress:"projects"})
  }

  showAbout(){
    this.setState({progress:"about"})
  }

  showContact(){
    this.setState({progress:"contact"})
  }

  showCoronaSummer(){
    this.setState({progress:"corona-summer"})
  }

  showPataks(){
    this.setState({progress:"pataks"})
  }

  showLiftmaster(){
    this.setState({progress:"liftmaster"})
  }

  showModelo(){
    this.setState({progress:"modelo"})
  }

  showChamberlain(){
    this.setState({progress:"chamberlain"})
  }

  showLiftmasterEmail(){
    this.setState({progress:"liftmaster-email"})
  }

  showGoogle(){
    this.setState({progress:"google"})
  }

  showLyrical(){
    this.setState({progress:"lyrical"})
  }

  PickView(props){
    let progress = this.state.progress;

    if (progress == 'projects'){
      return <Projects showCoronaSummer={this.showCoronaSummer.bind(this)} showPataks={this.showPataks.bind(this)} showLiftmaster={this.showLiftmaster.bind(this)} showModelo={this.showModelo.bind(this)} showChamberlain={this.showChamberlain.bind(this)} showLiftmasterEmail={this.showLiftmasterEmail.bind(this)} showGoogle={this.showGoogle.bind(this)} showLyrical={this.showLyrical.bind(this)}/>
    }
    if (progress == 'contact'){
      return <Contact/>
    }
    if (progress == 'about'){
      return <About/>
    }
    if (progress == 'corona-summer'){
      return <CoronaSummer/>
    }
    if (progress == 'pataks'){
      return <Pataks/>
    }
    if (progress == 'liftmaster'){
      return <Liftmaster showCoronaSummer={this.showCoronaSummer.bind(this)} showPataks={this.showPataks.bind(this)} showLiftmaster={this.showLiftmaster.bind(this)} showModelo={this.showModelo.bind(this)} showChamberlain={this.showChamberlain.bind(this)} showLiftmasterEmail={this.showLiftmasterEmail.bind(this)} showGoogle={this.showGoogle.bind(this)} showLyrical={this.showLyrical.bind(this)}/>
    }
    if (progress == 'modelo'){
      return <Modelo/>
    }
    if (progress == 'chamberlain'){
      return <Chamberlain/>
    }
    if (progress == 'liftmaster-email'){
      return <LiftmasterEmail/>
    }
    if (progress == 'google'){
      return <Google/>
    }
    if (progress == 'lyrical'){
      return <Lyrical/>
    }
  }

  render() {
    return (
      <div className="wrapper">
          <Header showProjects={this.showProjects.bind(this)} showAbout={this.showAbout.bind(this)} showContact={this.showContact.bind(this)}/>

          {this.PickView()}

          <Footer/>

      </div>
    );
  }
}

export default App;
