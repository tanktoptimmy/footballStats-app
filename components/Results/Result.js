import { format } from 'date-fns';
import './result.modules.css'

const Result = ({event}) => {
  return <div>
    <div className="flex-line">
      <span className="bold">{event.teams.home.name}</span> <span className="halftime">({event.score.halftime.home})</span> <span className="bold">{event.score.fulltime.home}</span>
    </div>
    <div className="flex-line">
    <span className="bold">{event.teams.away.name}</span> <span className="halftime">({event.score.halftime.away})</span> <span className="bold">{event.score.fulltime.away}</span>
    </div>
    <div className="flex-line"><span className="ref">Ref: {event.referee}</span> <span className="date">{format(new Date(event.date), 'dd LLL yyyy')}</span></div>
  </div>
}

export default Result;