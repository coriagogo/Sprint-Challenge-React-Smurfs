import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


const AppStyles = styled.div`
 
  h1 {
    font-family: 'Luckiest Guy', cursive;
    text-align: center;
    color: white;
    font-size: 75px;
    letter-spacing: 5px;
    text-shadow: 4px 6px 0px rgba(0,0,0,0.2);
  
  }
`

const NavStyles = styled.div`
  font-family: 'Luckiest Guy', cursive;
  text-align: right;
  margin: 20px 20px 0 0;
  font-size: 25px;
  a {
    text-decoration: none;
    color: white;;
    padding: 0 10px;
  }
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }


 
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <AppStyles>
        
        <NavStyles>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </NavStyles>

        <h1>Smurf Village</h1>
        <Route 
          path="/smurf-form"
          render={props => (
            <SmurfForm
            {...props}
            addSmurf={this.addSmurf}
            />
          )}
        />     
        
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs 
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf} 
            />
          )}
        />
        
      </AppStyles>
    );
  }
}

export default App;
