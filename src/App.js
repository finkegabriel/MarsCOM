import React, { Component } from 'react';
//import logo from './rovercircle.svg';
import './App.css';
import logos from './line.png';
import Background from '../src/assets/background.jpg';

const baseStyles = {
  contain:{
    height: '100vh',
    position: 'relative',
  },
  background:{
    backgroundImage: `url(${Background})`,
    // backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '103vh',
    width: '100%',
    marginTop:'-1.5rem',
  },
  circle:{
    backgroundColor: 'rgba(0,0,0,.5)',
  },
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.queue = [];
    this.intervalId = setInterval(() => {
      if(this.queue.length){
          this.rotateme(this.queue.shift())
      }
    }, 1000);


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
     
      console.log("worked");
      
      var degrees =  parseInt(text, 16)*21;

      
      //console.log(t, "text");
      console.log(degrees, "degress");

      degcenter.style.transition = 'transform 500ms linear';

      degcenter.style.transform = `rotate(${degrees}deg)`;
     

    
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

      this.queue =  this.queue.concat(splitt);
      
     // this.rotateme(splitt);
     
    }

  
    }catch(error){

    }
    event.preventDefault();

  }

  
  render() {
    
    return (
      <div style={baseStyles.contain}>
      <div className="App" style={baseStyles.background}>

       <header className="App-header" >
        <h2>Mars - Earth Hex COM</h2>
        
        </header>
        
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


        
       <div className='main' >
        <div className='circle-container' style={baseStyles.circle}>
            
            <a className='degcenter'><h3>==============></h3></a>
            <a class='deg0'><h3>0</h3></a>
            <a class='deg21'><h3>1</h3></a>
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
          </div>
          </div>


      </div>


    );
  }
}




export default App;
