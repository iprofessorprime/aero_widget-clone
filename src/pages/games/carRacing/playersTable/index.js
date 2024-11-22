import React from 'react';
import { PlayerTable } from './styles';

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
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {getPlayersByCategory('carRacing')}
      </tbody>
    </PlayerTable>
  );
};

export default PlayersTable;
