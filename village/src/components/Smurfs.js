import React, { Component } from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';

const SmurfsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;  
  width: 90%;
  margin: 0 auto; 
`

const SmurfCardStyles = styled.div`
  width: 45%;
  border-radius: 10px;
  background-color: #ffffff87;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
  0 2px 4px rgba(0, 0, 0, 0.24);
  font-size: 20px;

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }   
`

const Button = styled.button`
    border: none;
    background-color: transparent;
    margin: 5px auto;
    cursor: pointer;
    font-size: 15px;
    color: black;
`

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  render() {
    return (
      <SmurfsWrapper>
        {this.props.smurfs.map(smurf => (
          <SmurfDetails key={smurf.id} smurf={smurf} deleteSmurf={this.props.deleteSmurf} />
        ))}
      </SmurfsWrapper>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

function SmurfDetails(props) {
  const { name, age, height, id } = props.smurf;
  return (
    <SmurfCardStyles>
      
      {name}
      <div className="smurf-age">
        Age: {age} smurf years old
      </div>
      <div className="smurf-height">
        Height: {height}
      </div>
      <Button onClick={() => props.deleteSmurf(id)}><i class="fas fa-trash-alt"></i></Button>
    </SmurfCardStyles>
  )
}

export default Smurfs;
