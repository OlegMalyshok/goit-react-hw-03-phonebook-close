import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: '1', name: 'Rosie Simpson' },
      { id: '2', name: 'Hermione Kline' },
      { id: '3', name: 'Eden Clements' },
    ],
    name: '',
  };
}
