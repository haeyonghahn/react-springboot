import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const message = 'Hello React';
    return (
      <div id="App">
        <h1>{ message }</h1>
      </div>
    );
  }
  componentDidMount() {
    axios.get('/api/hello', { 
      // params: { id: 1 } 
    }) 
    .then(function(response) { 
      console.log(response.data); 
    }) 
    .catch(function(error) { 
      console.log(error);
    });
  }
}