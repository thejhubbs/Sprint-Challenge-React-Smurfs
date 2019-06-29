import React, { Component } from 'react';
import axios from 'axios'

import Smurf from './Smurf';

class Smurfs extends Component {

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log("Error: ", err);
    })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
