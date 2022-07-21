import {React, Fragment} from 'react';
import matches from "../data/matchesData";
import players from "../data/playersData";
import Match from './Match';

export default function MatchesList() {
  console.log(matches);

  const matchList = matches.map((match) =>{
    return <Match match={match} players = {players}/>
  })
  return (
    <Fragment>
      {matchList}
    </Fragment>
  );
}
