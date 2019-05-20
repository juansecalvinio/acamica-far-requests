import React from 'react';
import Players from './Players';

const API = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(API);
      const team = await response.json();
      this.setState({ players: team.player });
      console.log(this.state.players);
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    const { players } = this.state;
    return (
      <div className="container">
        <Players players={ players } />
      </div>
    );
  }
}

export default App;
