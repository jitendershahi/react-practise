import React, { Component } from 'react'
import classes from './App.css'
import Person from './Person/Person'

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
    let persons = null;
    let buttonClass = ''

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

      buttonClass = classes.red
      
    }

    let classesArray = []

    if(this.state.persons.length <= 2 ){
      classesArray.push(classes.red)
    } 

    if(this.state.persons.length <= 1 ){
      classesArray.push(classes.fontsize)
     }


    return (
      <div className={classes.App}>
        <h1 className={classesArray.join(' ')}>manoj reactjs developer</h1>
        <button className={buttonClass} onClick={this.ToggleName.bind(this,'mamamamamam')}>Toggle Name</button>
        {persons}
               
      </div>
    );
  }
}

export default App;
