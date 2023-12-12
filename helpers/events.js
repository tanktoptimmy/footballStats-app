const resultedEvents = (events) =>  events.filter(ev => ev.status === "FT");


const fixtureEvents = (events) =>  events.filter(ev => ev.status !== "FT");

export {
  resultedEvents,
  fixtureEvents
}