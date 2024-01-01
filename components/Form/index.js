import { Fragment } from 'react';
import { Block, Tooltip } from '@/components';
import { sortByDate, calculatePoints } from '@/helpers';

import './form.modules.css';
const Form = ({ events }) => {
  const createTeamMatchesObject = (matches) => {
    const teamMatches = {};
    matches.sort(sortByDate).forEach((match) => {
      const homeTeamName = match.teams.home.name;
      const awayTeamName = match.teams.away.name;
      const homeTeamScore = parseInt(match.score.fulltime.home);
      const awayTeamScore = parseInt(match.score.fulltime.away);

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
        home: homeObject,
        away: awayObject,
        state: awayTeamState,
      });
    });

    return teamMatches;
  };

  // Create object with each team's matches and BTTS field
  const teamMatches = createTeamMatchesObject(events);

  // Calculate points for each team
  const sortedTeams = Object.entries(teamMatches)
    .map(([teamName, matches]) => {
      return {
        teamName: teamName,
        points: calculatePoints(matches, teamName),
      };
    })
    .sort((a, b) => b.points - a.points);

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
                  <Fragment key={index}>
                    <a className="hover" id={`${team.teamName.split(' ').join('')}-${index}`}>
                      <Block
                        key={index}
                        text={match.state}
                        type={match.state === 'W' ? 'dark' : match.state === 'D' ? 'med' : 'light'}
                      />
                    </a>
                    <Tooltip
                      anchorSelect={`#${team.teamName.split(' ').join('')}-${index}`}
                      content={`${match.home.name} ${match.home.score} v ${match.away.name} ${match.away.score}`}
                    />
                  </Fragment>
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
