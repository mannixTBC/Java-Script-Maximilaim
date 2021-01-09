import { Component } from "react";
import './App.css';
import classes from '../style.module.css';
import Persons from '../components/Persons/Person/Persons';
import Cockpit from '../components/Cockpit/cockpit';


import styled from 'styled-components';

class App extends Component {
  state = {
    persons : [
      {id :'heghj',name : 'Radu', age : 28},
      {id:'jhggyg',name: 'Manu', age : 29},
      {id:'edjhefg',name : 'Stefan', age : 26}
    ],
    otherState: 'some other value',
    showPersons : false
  }

  switchNameHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((p) =>{
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = this.state.persons;

    persons[personIndex] = person;



    this.setState({
      persons : persons
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
        <div >

          <Persons
          persons = {this.state.persons}
          changed = {this.switchNameHandler}
          />
          

        </div>
      )
    }
    console.log(this.state)
    return(
      <div className={classes.App}>
        <Cockpit
        classes={classes}
        toggle={this.togglePersonHandler}
        />
         { persons } 
      </div>  
    )
  }

  
}

export default App;