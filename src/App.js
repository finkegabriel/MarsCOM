import React, { Component } from 'react';
//import logo from './rovercircle.svg';
import './App.css';
import logos from './line.png';
import { EventEmitter } from 'events';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.move = this.move.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
 
    move(event) {
    var angle = '90deg';
    //console.log(event.target.value);
    console.log(this.state.value);
    let degcenter = document.querySelector(".degcenter");
    degcenter.style.transform = 'rotate('+angle+')';
    try{

    }catch(error){

    }
    event.preventDefault();

  }
  

   

  
  render() {
    
    return (
      
      <div className="App">
      
        <center><h2>Mars - Earth Hex COM</h2></center>
        
        <p>
          <form onSubmit={this.move}>
            <p>
              <textarea value={this.state.value}></textarea>
            </p>
            <input type="text" name="message" placeholder="Message" value={this.state.value} onChange={this.handleChange} />

            <p>
            <input id="sendMessage" type="submit" value="Send" />
            </p>

          </form>
        </p>


        
        <header className="App-header">

          <div class='circle-container'>
            
            <a id="turn" class='degcenter'><h3>==============></h3></a>
            <a class='deg0'><h3>0</h3></a>
            <a class='deg21'><h3>1</h3></a>`
            <a class='deg42'><h3>2</h3></a>
            <a class='deg63'><h3>3</h3></a>
            <a class='deg84'><h3>4</h3></a>
            <a class='deg105'><h3>5</h3></a>
            <a class='deg127'><h3>6</h3></a>
            <a class='deg148'><h3>7</h3></a>
            <a class='deg169'><h3>8</h3></a>
            <a class='deg190'><h3>9</h3></a>
            <a class='deg211'><h3>A</h3></a>
            <a class='deg232'><h3>B</h3></a>
            <a class='deg254'><h3>C</h3></a>
            <a class='deg275'><h3>D</h3></a>
            <a class='deg296'><h3>E</h3></a>
            <a class='deg317'><h3>F</h3></a>
            <a class='deg338'><h3>?</h3></a>




          </div>

        </header>

      </div>


    );
  }
}




export default App;
