import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import Radium, {StyleRoot } from 'radium'

class App extends Component {
  state = {
    persons:[
      {name:'jitender',age:28, id:'asdfdf1'},
      {name:'manoj',age:25, id:'erwreerw1'},
      {name:'shanky',age:24, id:'kuikukui1'}                 
    ],
    submitted:false,
    showPerson:false
  }

  deletePerson(index,element) {
    let person = [...this.state.persons]
    person.splice(index, 1)
    this.setState({
      persons:person
    })
  }

  dataName(event, id){
    let personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

   ToggleName() {
     let doesShow = this.state.showPerson
     this.setState({
       showPerson : !doesShow
     })
   }

  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid red',
      padding:'8px',
      cursor:'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color:'black'
      }
    }

    let persons = null;

    if(this.state.showPerson){
      persons = (<div>
        {this.state.persons.map((element, index) => {
          return <Person click={this.deletePerson.bind(this,index,element)}
           name={element.name}
           age={element.age} 
           key={element.id}
           data={(event) => {this.dataName(event, element.id)}}
          />
        })}
      </div>)

      style.backgroundColor = 'red'
      style[':hover'] =  {
        backgroundColor:'white',
        color:'red'
      }
    }

    let classes = []

    if(this.state.persons.length <= 2 ){
     classes.push('red')
    } 

    if(this.state.persons.length <= 1 ){
      classes.push('fontsize')
     }


    return (
      <StyleRoot>
      <div className="App">
        <h1 className={classes.join(' ')}>manoj reactjs developer</h1>
        <button style={style} onClick={this.ToggleName.bind(this,'mamamamamam')}>Toggle Name</button>
        {persons}
               
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
