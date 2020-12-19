import { Component } from "react";
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

class App extends Component {
  state = {
    persons : [
      {name : 'Max', age :28},
      {name: 'Manu', age : 29},
      {name : 'Stefan', age : 26}
    ],
    otherState: 'some other value',
    showPersons : false
  }

  switchNameHandler = (newName) => {

    this.setState({
      persons : [
        {name : newName, age : 28},
        {name: 'Manu', age : 29},
        {name : 'Stefan', age : 26}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }
  styledButton = styled.button`
      background-color: ${props => props.alt? 'red': 'green' };
      width: 60%;
      margin: 16px auto;
      border: 1px solid #eee;
      padding : 16 px;
      text-align: center; 

`

  render(){
  
    let persons = null; 

    if(this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name}
            age = {person.age}/>
          })}

        </div>
      )
    }
    return(
      <div>
        <h1>HI, i am a react app</h1>
        <this.styledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}> Show Persons </this.styledButton>
         { persons } 
      </div>  
    )
  }


}

export default App;