import React, { Component } from 'react';

class Clock extends Component {

  state = {
    time: '',
  }

 componentDidMount() {
    setInterval( () => {
      this.setState({
        time : new Date().toLocaleString()
      })
    },1000)
  }
 
    render() {
        return (
            <div class="col-xs-12 inside-box box-low clock">
                <h2> {this.state.time} </h2>
            </div>    
        )
    }   
}



export default Clock;