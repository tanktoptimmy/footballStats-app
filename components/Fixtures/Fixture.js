import { format } from 'date-fns';
import './fixture.modules.css';

const Fixture = ({ event }) => {
  return (
    <div>
      <div className="flex-line">
        <span className="bold">{event.teams.home.name}</span> v <span className="bold">{event.teams.away.name}</span>
      </div>
      <div className="flex-line">
        {event.referee ? <span className="ref">Ref: {event.referee}</span> : null}
        <span className="date">{format(new Date(event.date), 'dd LLL yyyy')}</span>
      </div>
    </div>
  );
};

export default Fixture;
