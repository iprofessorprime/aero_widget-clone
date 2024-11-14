import React from 'react'
import { PlayerTable } from '../../styles';

const PlayersTable = ({ playerList, handleNameSelect }) => {
  const getPlayersByCategory = (category) => {
    return playerList
      .filter((player) => player.category === category)
      .map((player, index) => (
        <tr key={index} onClick={() => handleNameSelect(player)}>
          <td>{player.name}</td>
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
          <td className="vehicles">
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
          <td className="birds">
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
          <td className="fruits">
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
  )
}

export default PlayersTable