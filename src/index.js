import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//importing to be used for react router 4
import App from './components/App';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </div>

  </Router>,

  document.getElementById('root')



);
