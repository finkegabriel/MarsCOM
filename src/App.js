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
    toHex(str) {
      var hex = '';
	for(var i=0;i<str.length;i++) {
		hex += ''+str.charCodeAt(i).toString(16);
	}
	return hex;
    }
    

    rotateme(text){
      var angle;

      let degcenter = document.querySelector(".degcenter");
     
      //var text = p.split("");
      console.log("worked");

     // console.log(text);
      if(text==='0'){
        angle = '0deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='1'){
        angle = '21deg';
        degcenter.style.transform = 'rotate('+angle+')';
      }
      if(text==='2'){
        angle = '42deg';
        degcenter.style.transform = 'rotate('+angle+')';
      }
      if(text==='3'){
        angle = '63deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='4'){
        angle = '84deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='5'){
        angle = '105deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='6'){
        angle = '127deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='7'){
        angle = '148deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='8'){
        angle = '169deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='9'){
        angle = '190deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='A'){
        angle = '211deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='B'){
        angle = '232deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='C'){
        angle = '254deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='D'){
        angle = '275deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }
      if(text==='E'){
        angle = '296deg';
        degcenter.style.transform = 'rotate('+angle+')';
      }
      if(text==='F'){
        angle = '317deg';
        degcenter.style.transform = 'rotate('+angle+')';

      }if(text==='?'){
       angle = '338deg';
       degcenter.style.transform = 'rotate('+angle+')';

      }else{
        console.log("You done fucked up!!");
      }
    }
    move(event) {
    var angle ='';
    var text = this.state.value;
  
    //console.log(this.toHex(this.state.value));
    console.log(this.state.value);
    var str_split = text.split("");
    try{

    for(var i=0; i<str_split.length; i++){
      var result = str_split[i];

      console.log(str_split[i]);
      var r = this.toHex(result);
      console.log(r);

      var splitt = r.split("");

      console.log(splitt);

      this.rotateme(splitt);
     
    }

  
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
