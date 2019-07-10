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
    fetch('/bin/fragmentexamples/movies.json', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Connection': 'Keep-Alive',
        'Accept': 'application/json',
        'Authorization': 'Basic YWRtaW46YWRtaW4=',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())  // res is result from api, convert to json format
      .then(json => {  // take json and set json data to state.items
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
    }

  render() {
    console.log(this.props, 'props');
    console.log(this.state, 'state');

    let { isLoaded, items } = this.state  // access items from state in render()

    if (!isLoaded) {
      return <div className="content-fragment">Loading...</div>;
    }

    else {
      return (
        <div className="content-fragment">
          <ul>
            {items.map(item => ( //loop each obj from api result 
              <li key={item.modelTitle}>
                <p>Title: {item.title}</p>
                <p>Description: {item.description}</p>
                <p>Release Date: {item.releaseDate}</p>
              </li> 
            ))} 
          </ul> 
        </div>
      )
    }
  }
}

export default ContentFragment;
