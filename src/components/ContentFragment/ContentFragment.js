import React, { Component } from 'react';

class ContentFragment extends Component {

	constructor(props) {
		super(props);

		this.state = {
      items: [],
      isLoaded: false,
		}
	}

  componentDidMount() {
    fetch('http://localhost:4502/bin/fragmentexamples/movies.json')
      .then(res => res.json())  //res is result from api, convert to json format
      .then(json => {  //take json and set json data to state.items
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
    }

  render() {
    console.log(this.props);

    var { isLoaded, items } = this.state  //access items from state in render

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {
      return (
        <div className="content-fragment">
          <ul>
            {items.map(item => ( //loop each obj from api result 
              <li key={item.modelTitle}>
                {item.title}
              </li> 
            ))}; 
          </ul> 
        </div>
      )
    }
  }
}

export default ContentFragment;
