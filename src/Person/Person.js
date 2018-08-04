import React from 'react';
import './Person.css';
import Radium from 'radium'


const person = (props) => {
    const style = {
        '@media(max-width:500px)':{
            width:'20px'
        }
    }
    return (
     <div className="Person" style={style}>y
    <input type="text" onChange={props.data} value={props.name}/>
    <p onClick={props.click}>my name is {props.name} and my age is {props.age}</p>
    <p>{props.children}</p>
    </div>

    )
}

export default Radium(person);   