import './league.modules.css'
const League = ({events}) => {

  let standings = {};
  events.forEach((match,i) => {
      const homeTeam = match.teams.home.name;
      const awayTeam = match.teams.away.name;
      const homeGoals = parseInt(match.score.fulltime.home);
      const awayGoals = parseInt(match.score.fulltime.away);
      const homeCards = match.events.filter(event => event.team.name === homeTeam && event.type === 'Card');
      const awayCards = match.events.filter(event => event.team.name === awayTeam && event.type === 'Card');

      let homePoints = 0;
      let awayPoints = 0;
      let homeResult, awayResult;

      if (homeGoals > awayGoals) {
          homePoints = 3;
          homeResult = 'win';
          awayResult = 'loss';
      } else if (awayGoals > homeGoals) {
          awayPoints = 3;
          homeResult = 'loss';
          awayResult = 'win';
      } else {
          homePoints = 1;
          awayPoints = 1;
          homeResult = 'draw';
          awayResult = 'draw';
      }

      if (!standings[homeTeam]) {
          standings[homeTeam] = {
              matchesPlayed: 0,
              win: 0,
              draw: 0,
              loss: 0,
              goalsFor: 0,
              goalsAgainst: 0,
              goalDifference: 0,
              yellowCards: 0,
              redCards: 0,
              points: 0
          };
      }

      standings[homeTeam].matchesPlayed++;
      standings[homeTeam][homeResult]++;
      standings[homeTeam].goalsFor += homeGoals;
      standings[homeTeam].goalsAgainst += awayGoals;
      standings[homeTeam].goalDifference = standings[homeTeam].goalsFor - standings[homeTeam].goalsAgainst;
      standings[homeTeam].yellowCards += homeCards.filter(card => card.detail === 'Yellow Card').length;
      standings[homeTeam].redCards += homeCards.filter(card => card.detail === 'Red Card').length;
      standings[homeTeam].points += homePoints;

      if (!standings[awayTeam]) {
        standings[awayTeam] = {
            matchesPlayed: 0,
            win: 0,
            draw: 0,
            loss: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,
            yellowCards: 0,
            redCards: 0,
            points: 0
        };
    }

    standings[awayTeam].matchesPlayed++;
    standings[awayTeam][awayResult]++;
    standings[awayTeam].goalsFor += awayGoals;
    standings[awayTeam].goalsAgainst += homeGoals;
    standings[awayTeam].goalDifference = standings[awayTeam].goalsFor - standings[awayTeam].goalsAgainst;
    standings[awayTeam].yellowCards += awayCards.filter(card => card.detail === 'Yellow Card').length;
    standings[awayTeam].redCards += awayCards.filter(card => card.detail === 'Red Card').length;
    standings[awayTeam].points += awayPoints;
  });

  // Convert standings object to an array of objects for sorting and rendering
  let leagueTable = Object.keys(standings).map(team => ({
      team,
      matchesPlayed: standings[team].matchesPlayed,
      wins: standings[team].win,
      draws: standings[team].draw,
      losses: standings[team].loss,
      goalsFor: standings[team].goalsFor,
      goalsAgainst: standings[team].goalsAgainst,
      goalDifference: standings[team].goalDifference,
      yellowCards: standings[team].yellowCards,
      redCards: standings[team].redCards,
      points: standings[team].points
  }));

  leagueTable.sort((a, b) => {
    if (a.points !== b.points) {
        return b.points - a.points; // Sort by points descendingly
    } else if (a.goalDifference !== b.goalDifference) {
        return b.goalDifference - a.goalDifference; // Sort by goal difference descendingly
    } else if (a.goalsFor !== b.goalsFor) {
        return b.goalsFor - a.goalsFor; // Sort by goals scored descendingly
    } else {
        return a.team.localeCompare(b.team); // Sort alphabetically if all other criteria are equal
    }
  });

  return (
    <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>+/-</th>
            <th>YC</th>
            <th>RC</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {leagueTable.map((teamData, index) => (
            <tr key={index}>
              <td>{teamData.team}</td>
              <td>{teamData.matchesPlayed}</td>
              <td>{teamData.wins}</td>
              <td>{teamData.draws}</td>
              <td>{teamData.losses}</td>
              <td>{teamData.goalsFor}</td>
              <td>{teamData.goalsAgainst}</td>
              <td>{teamData.goalDifference}</td>
              <td>{teamData.yellowCards}</td>
              <td>{teamData.redCards}</td>
              <td>{teamData.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default League;