const calculatePoints = (matches, teamName) => {
  let points = 0;
  matches.forEach((match) => {
    const selectedTeam = teamName === match.home.name ? "Home" : "Away"
    const score = selectedTeam === "Home" ?{ 
      current: match.home.score,
      opposition: match.away.score
    }  : {
      current: match.away.score,
      opposition: match.home.score
    }
    if (score.current > score.opposition) {
      points += 3; // 3 points for a win
    } else if (score.current === score.opposition) {
      points += 1; // 1 point for a draw
    }
  });
  return points;
};

export { calculatePoints }