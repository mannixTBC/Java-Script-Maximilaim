import React from 'react';
import Person from './Person.js'



const Persons = (props) => {
    return (props.persons.map(person => {
        return <Person 
        
        name={person.name}
        age = {person.age}
        changed = {(event)=>props.changed(event,person.id)}
        
        />
      }))
}

export default Persons;