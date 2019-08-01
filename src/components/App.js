import React, { Component } from 'react';
import './styles/App.css';

//The Codeslinger's creed
//I do not click with my hand; he who clicks with his hand has forgotten the face of his father
//I click with my eye
//
//I do not type with my hand; he who types with his hand has forgotten the face of his father
//I type with my mind
//
//I do not code with my computer; he who codes with his computer has forgotten the face of his father
//I code with my heart


class App extends Component {
  constructor (props){
    super(props);
    this.state={
      chipCount:200,
     formControls:{
      
       smallBlind:{
         value:{}
       },
       bigBlind:{
         value:{}
       }
     }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)



  }
  handleChange(event) {
    const name = event.target.name;
      const value = event.target.value;
      this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
  }
  
  handleSubmit = (event)=>{
    // const chipers = props.smallBlind.value;
    // console.log(chipers)
    // this.setState({chipCount:})
    
    // this.setState({chipCount:smallBlind})
    event.preventDefault();
   
  }
  render() {
    return (
      
      <form onSubmit = {this.handleSubmit}>

      <input type="number" 
             name="smallBlind" 
             value={this.state.formControls.smallBlind.value} 
             onChange={this.handleChange} 
      />

      <input type="number" 
             name="bigBlind" 
             value={this.state.formControls.bigBlind.value} 
             onChange={this.handleChange} 
      />

<input type="submit" value="Submit" />
  </form>      
);
}

}



export default App;