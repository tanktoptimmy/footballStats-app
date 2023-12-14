import { Block } from '@/components';

import './form.modules.css';
const Form = ({ events }) => {
  const createTeamMatchesObject = (matches) => {
    const teamMatches = {};

    matches.forEach((match) => {
      const homeTeamName = match.teams.home.name;
      const awayTeamName = match.teams.away.name;
      const homeTeamScore = parseInt(match.score.fulltime.home);
      const awayTeamScore = parseInt(match.score.fulltime.away);
      // change this to home/Draw/Away
      const btts = homeTeamScore > 0 && awayTeamScore > 0;

      const homeObject = {
        name: homeTeamName,
        score: homeTeamScore,
      };

      const awayObject = {
        name: awayTeamName,
        score: awayTeamScore,
      };

      if (!teamMatches[homeTeamName]) {
        teamMatches[homeTeamName] = [];
      }
      if (!teamMatches[awayTeamName]) {
        teamMatches[awayTeamName] = [];
      }

      const homeTeamState = homeTeamScore > awayTeamScore ? 'W' : homeTeamScore === awayTeamScore ? 'D' : 'L';
      const awayTeamState = homeTeamState === 'W' ? 'L' : homeTeamState === 'D' ? 'D' : 'W';

      teamMatches[homeTeamName].push({
        home: homeObject,
        away: awayObject,
        state: homeTeamState,
      });
      teamMatches[awayTeamName].push({
        home: awayObject,
        away: homeObject,
        state: awayTeamState,
      });
    });

    return teamMatches;
  };

  // Create object with each team's matches and BTTS field
  const teamMatches = createTeamMatchesObject(events);

  const calculatePoints = (matches) => {
    let points = 0;
    matches.forEach((match) => {
      const homeTeamScore = match.home.score;
      const awayTeamScore = match.away.score;

      if (homeTeamScore > awayTeamScore) {
        points += 3; // 3 points for a win
      } else if (homeTeamScore === awayTeamScore) {
        points += 1; // 1 point for a draw
      }
    });
    return points;
  };

  // Calculate points for each team
  const sortedTeams = Object.entries(teamMatches).map(([teamName, matches]) => {
    return {
      teamName: teamName,
      points: calculatePoints(matches),
    };
  });

  sortedTeams.sort((a, b) => b.points - a.points);

  return (
    <table>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Team Form</th>
        </tr>
      </thead>
      <tbody>
        {sortedTeams.map((team) => (
          <tr key={team.teamName}>
            <td>{team.teamName}</td>
            <td>
              <div className="flex">
                {teamMatches[team.teamName].reverse().map((match, index) => (
                  <Block
                    key={index}
                    text={match.state}
                    type={match.state === 'W' ? 'dark' : match.state === 'D' ? 'med' : 'light'}
                  />
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Form;
