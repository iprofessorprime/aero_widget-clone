import React from 'react';
import { PlayerTable } from '../../styles';

const PlayersTable = ({ playerList, handleNameSelect }) => {
  const getPlayersByCategory = (category) => {
    const sortedPlayers = playerList
      .filter((player) => player.category === category)
      .sort((a, b) => b.score - a.score);

    return sortedPlayers.map((player, index) => (
      <tr key={index} onClick={() => handleNameSelect(player)}>
        <td>
          {player.name}
          {index < 3 && '⭐'} 
        </td>
        <td>{player.score}</td>
      </tr>
    ));
  };

  return (
    <PlayerTable>
      <thead>
        <tr>
          <th>Vehicles</th>
          <th>Birds</th>
          <th>Fruits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {getPlayersByCategory('vehicles')}
              </tbody>
            </table>
          </td>
          <td >
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {getPlayersByCategory('birds')}
              </tbody>
            </table>
          </td>
          <td >
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {getPlayersByCategory('fruits')}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </PlayerTable>
  );
};

export default PlayersTable;
