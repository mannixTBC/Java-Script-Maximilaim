import React from 'react';

const Cockpit = (props) => {
    return(
        <div >
        <h1>HI, i am a react app</h1>
        <button className={props.classes.Button} alt={props.show} onClick={props.toggle}> Show Persons </button>
   
      </div>
    )
}

export default Cockpit;