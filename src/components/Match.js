import React from 'react';
import Box from "@mui/material/Box";
import { Paper } from '@mui/material';

export default function Match(props) {
  console.log(props.players.id1);
  const playersArray2 = props.players;
  console.log(playersArray2)
  const winner = (props.match.winner === 0 ? 'None of them': `${props.players[`id${props.match.winner}`].name}`)
  return (
    <Paper elevation={3}>
      <h2>Match No, {props.match.id}</h2>
      <h2>{`Player ${
        props.players[`id${props.match.players[0]}`].name
      } against Player ${
        props.players[`id${props.match.players[1]}`].name
      }`}</h2>
      <h2>Score Diff, {props.match.scoreDifference}</h2>
      <h2>Winner, {winner}</h2>
    </Paper>
  );
}
 