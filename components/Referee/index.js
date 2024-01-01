import { ColourCard, Goal } from '@/components/';
import './referee.modules.css';
const Referee = ({ events }) => {
  const createRefereeEventsObject = (matches) => {
    const refereeEvents = {};
    matches.forEach((match) => {
      const refereeName = match.referee;
      if (!refereeEvents[refereeName]) {
        refereeEvents[refereeName] = {
          events: [],
          matchesOfficiated: 0,
        };
      }

      refereeEvents[refereeName].matchesOfficiated++;

      match.events.forEach((event) => {
        // Filter events for goals and cards
        if (event.type === 'Goal' || event.type === 'Card') {
          refereeEvents[refereeName].events.push(event);
        }
      });
    });

    return refereeEvents;
  };

  // Create object keyed by referee containing events
  const refereeEvents = createRefereeEventsObject(events);
  console.log(refereeEvents);

  // Sort events based on elapsed time and extra time
  const sortEvents = (events) =>
    events.sort((a, b) => {
      if (a.time.elapsed !== b.time.elapsed) {
        return a.time.elapsed - b.time.elapsed;
      } else {
        return (a.time.extra || 0) - (b.time.extra || 0);
      }
    });

  // Output the new object with referee events
  return (
    <table>
      <thead>
        <tr>
          <th>Referee</th>
          <th>Events</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(refereeEvents).map((ref) => (
          <tr key={ref[0]}>
            <td>{ref[0]}</td>
            <td>
              <div className="relative flex">
                {sortEvents(ref[1].events).map((ev, index) => {
                  if (ev.type.toLowerCase() === 'goal') {
                    return <Goal key={`${ev.player.id}-${ev.team.id}-${ev.time.elapsed}-${index}`} />;
                  }
                  if (ev.type.toLowerCase() === 'card') {
                    return (
                      <ColourCard
                        key={`${ev.player.id}-${ev.team.id}-${ev.time.elapsed}-${index}`}
                        type={ev.detail.toLowerCase().replace('/', '').split(' ').join('-')}
                      />
                    );
                  }
                })}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Referee;
