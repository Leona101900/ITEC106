import React, { Component } from 'react';
import './index.css';
import image from './WR.png';
import './logggo.jpg';
class App extends Component {
   
  username:'';
  password:'';
  render() {
    return (
      
	  <div className="App">
       <center> <h1>Simple Login!</h1> </center>
	  <center> <img src={image} height={200} width={400} /></center>
<form action="/action_page.php">
<center>
  <label for="UN">UserName:</label>
  <input type="text" id="Admin" name="Admin"/><br/><br/>
  <label for="PW">Password:</label>
  <input type="text" id="1234" name="1234"/><br/><br/>
  <input type="submit" value="Submit"/>
  </center>
</form>
      </div>
	  
	  
    );
  }
}

export default App;