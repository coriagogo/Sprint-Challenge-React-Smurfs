import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  render() {
    return (
      <div className="Smurfs">
        {this.props.smurfs.map(smurf => (
          <SmurfDetails key={smurf.id} smurf={smurf} deleteSmurf={this.props.deleteSmurf} />
        ))}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

function SmurfDetails(props) {
  const { name, age, height, id } = props.smurf;
  return (
    <div classname="smurf-card">
      {name}
      <div className="smurf-age">
        Age: {age} smurf years old
      </div>
      <div className="smurf-height">
        Height: {height}
      </div>
      <button onClick={() => props.deleteSmurf(id)}>X</button>
    </div>
  )
}

export default Smurfs;
