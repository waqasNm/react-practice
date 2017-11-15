import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count : 0,
      counter: 0,
      secs: 29,
      status: false
    }
  }
  inc(){
    if(this.state.count >= 0 && this.state.count < 10){
      this.setState({count: ++this.state.count})      
    } 
    if(this.state.count > 9 && this.state.counter >= 0 ){
      this.state.counter++;
      console.log("limit reached")
      console.log(this.state.counter)
    }
    if(this.state.counter > 3){
      this.setState({status:true})
      // this.setState({comment:"You are Blocked for 30secs"})
      console.log('you are blocked for 30 secs')
      setTimeout(()=>{
        this.setState({count:0})
        this.setState({status:false})
        this.setState({secs:29})
        this.setState({counter:0})
        clearInterval(intervalEnd);
      }, 30000)
      let intervalEnd = setInterval(()=>{
        this.setState({secs:--this.state.secs})
      },1000)
    }

  }
  dec(){
    if(this.state.count > 0){
      this.setState({count: --this.state.count})
    }
    if (this.state.count == 0){
      this.state.counter++;
      console.log('limit reached')
    }
    if(this.state.counter > 3){
      this.setState({status:true})
      // this.setState({comment:"You are Blocked for 30secs"})      
      console.log('you are blocked for 30 secs')
      setTimeout(()=>{
        this.setState({count:0})
        this.setState({status:false})
        this.setState({secs:29})
        this.setState({counter:0})
        clearInterval(intervalEnd);
      }, 30000)
      let intervalEnd = setInterval(()=>{
        this.setState({secs:--this.state.secs})
      },1000)
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>{this.state.count}</h2>
        <button disabled={this.state.status} onClick = {this.inc.bind(this)}>Increament</button>
        <button disabled={this.state.status} onClick = {this.dec.bind(this)}>Decreament</button>
        {/* <h2>{this.state.secs}</h2> */}
        {this.state.status?(
        <h2>You are Blocked for {this.state.secs}secs</h2>        
        ):
        <h2>Keep Toggle</h2>
        }
      </div>
    );
  }
}

export default App;
