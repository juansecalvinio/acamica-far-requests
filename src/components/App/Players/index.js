import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
  render() {
    const { players } = this.props; 
    return (
      <div className="container is-fluid">
        {players.map(player => {
            return (
                <Player player={player} key={player.idPlayer} />
            )
        })}
      </div>
    )
  }
}

export default Players;
