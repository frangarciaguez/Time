import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Card from './Card';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Fran'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div class="cardgrid">
          <Card city="Paris" time="23:19" date="sábado, 4 de abril de 2020 (CEST)" />
          <Card city="Madrid" time="23:19" date="sábado, 4 de abril de 2020 (CEST)" />
          <Card city="Rome" time="23:19" date="sábado, 4 de abril de 2020 (CEST)" />
          <Card city="New York" time="23:19" date="sábado, 4 de abril de 2020 (CEST)" />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
