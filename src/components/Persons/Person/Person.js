import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding : 16 px;
        text-align: center; 

        @media (min-width :500px){
                width:450px;
        }       
`

const Person = (props) => {
    return(
        <StyledDiv>
            <p onClick={props.click}>I m {props.name} and i am {props.age} years old </p>
            <p>{props.chidren}</p>
            <input type="text"  onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
}


export default Person;