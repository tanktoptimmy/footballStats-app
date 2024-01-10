import './results.modules.css';
import Result from './Result';
import { GlowCard } from '@/components';

const Results = ({ events }) => {
  let eventsByRound = {};

  // Grouping matches by round
  events.forEach((event) => {
    const round = event['round'];

    if (!eventsByRound[round]) {
      eventsByRound[round] = [];
    }

    eventsByRound[round].push(event);
  });

  // Sorting matches within each round by time and home team name
  Object.keys(eventsByRound).forEach((round) => {
    eventsByRound[round].sort((a, b) => {
      // First, sorting by time
      const timeA = a.date;
      const timeB = b.date;

      if (timeA < timeB) {
        return -1;
      }
      if (timeA > timeB) {
        return 1;
      }

      // If times are equal, sort by home team name
      const homeTeamA = a.teams.home.name.toUpperCase();
      const homeTeamB = b.teams.home.name.toUpperCase();

      if (homeTeamA < homeTeamB) {
        return -1;
      }
      if (homeTeamA > homeTeamB) {
        return 1;
      }

      return 0;
    });
  });

  const sortedKeys = Object.keys(eventsByRound).sort((a, b) => {
    const numA = parseInt(a.match(/\d+/));
    const numB = parseInt(b.match(/\d+/));
    return numB - numA;
  });

  return (
    <div>
      {sortedKeys.map((round) => {
        return (
          <section key={round}>
            <h2 className="secondary-title">{round}</h2>
            <div className="grid">
              {eventsByRound[round].map((ev) => (
                <GlowCard key={ev._id}  px="px-md" py="py-md">
                  <Result event={ev} />
                </GlowCard>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Results;
