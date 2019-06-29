import React, { Component } from 'react';
import axios from 'axios'
import {Route, Link} from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      this.setState({ smurfs: response.data })
    })
    .catch(err => {
      console.log("Error: ", err);
    })
  }

  createSmurf = (smurf) => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      this.setState({ smurfs: response.data })
    })
    .catch(err => {
      console.log("Error: ", err)
    })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link> | <Link to="/smurf-form">New</Link>
        <br />
        <Route path="/smurf-form" render={(props) => <SmurfForm {...props} createSmurf={this.createSmurf} /> } />
        <Route path="/" exact render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
