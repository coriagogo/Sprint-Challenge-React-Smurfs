import React, { Component } from 'react';
import styled from 'styled-components';

const SmurfInput = styled.div`
  text-align: center;
  color: white;
  font-family: 'Luckiest Guy', cursive;
  font-size: 20px;
`

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;    
  margin: 0 auto;    

  input {
    background-color: #ffffff87;
    font-size: 16px;
    text-align: center;
    height: 30px;
    margin: 5px;
        
    ::placeholder {
      font-family: 'Roboto', sans-serif;
      letter-spacing: 2px;
      color: black;
      font-weight: bold;
    }
  }
`

const AddButton = styled.button`
  cursor: pointer;
  margin: 5px auto;
  font-family: 'Luckiest Guy', cursive;
  font-size: 25px;
  padding: 8px 5px 4px 5px;
  border-radius: 10px;
`

class SmurfForm extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  };

  handleInputChange = e => {   
    let value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
  }

  render() {
    return (
      <SmurfInput>
        Add A Smurf
        <FormStyles onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <AddButton onClick={this.addSmurf}>Add to the village</AddButton>
        </FormStyles>
      </SmurfInput>
    );
  }
}

export default SmurfForm;
