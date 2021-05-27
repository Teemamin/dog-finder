import React,{Component} from 'react'
import './App.css';
import NavBar from './NavBar'
import Dog from './Dog'
import hazel from './imgs/hazel.jpg'; 
import tubby from './imgs/tubby.jpg'; 
import whiskey from './imgs/whiskey.jpg'; 
import {Route,Switch,Redirect} from 'react-router-dom'
import Doglists from './Doglists'

class App extends Component {
 static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render(){
   
    return (
      <div className="App">
        <NavBar dogs={this.props.dogs}/>
        <Switch>
          <Route exact path='/dogs'  render={()=><Doglists dogs={this.props.dogs}/>}/>
          <Route exact path='/dogs/:name'  render={(routeprops)=><Dog dogs={this.props.dogs} {...routeprops}/>}/>
          <Redirect to='/dogs' />
        </Switch>
      </div>
    );
  }
}

export default App;
