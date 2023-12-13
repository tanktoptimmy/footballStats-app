import './fixtures.modules.css';
import Fixture from './Fixture';

const Fixtures = ({ events }) => {
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
  return (
    <div>
      {Object.entries(eventsByRound).map((round) => {
        return (
          <section key={round[0]}>
            <h2 className="secondary-title">{round[0]}</h2>
            <div className="grid">
              {round[1].map((ev) => (
                <Fixture key={ev._id} event={ev} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Fixtures;
