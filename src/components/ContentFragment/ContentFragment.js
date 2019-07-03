import React, { Component } from 'react';

class ContentFragment extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);

    return (

      <div className="content-fragment">
        <p>First Name: David</p>
        <p>Last Name: Feldbaum</p>
        <p>Company: ICF Next</p>
      </div>
    );
  }
}

export default ContentFragment;
