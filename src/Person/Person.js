import React from 'react';
import classes from './Person.css';


const person = (props) => {
    
    return (
     <div className={classes.Person}>
    <input type="text" onChange={props.data} value={props.name}/>
    <p onClick={props.click}>my name is {props.name} and my age is {props.age}</p>
    <p>{props.children}</p>
    </div>

    )
}

export default person;   