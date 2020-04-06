import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import TimeCard from './TimeCard';
import moment from 'moment';
import './style.css';
require('moment/locale/es');

let time = new Date().toLocaleString();

//gettime();
function gettime(){
  fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        //.then(data => {this.setState({date:data.message.buhund})})
        .then(data => {
          this.setState({date:'holamundo'})
        })
  fetch('https://worldtimeapi.org/api/ip/188.127.181.241')
    .then(response => response.json())
    //.then(data => {this.setState({date:date.datetime})})
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Fran',
      date: [],
      time: []
    };
  }

  componentDidMount(){
    fetch('https://worldtimeapi.org/api/ip/188.127.181.241')
    .then(response => response.json())
    .then(data => {
      moment.locale("es");
      this.setState({time:moment(data.datetime).format('LT')});
      this.setState({date:moment(data.datetime).format('LL')});
    })
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div className="cardgrid">
          <TimeCard city="Home" time={this.state.time} date={this.state.date} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
