import Link from 'next/link';
import slugify from 'slugify';

const leagues = [
  {
    name: 'Premier League',
    season: 2023,
    id: 39,
  },
  {
    name: 'Sky Bet Championship',
    season: 2023,
    id: 40,
  },
  {
    name: 'Spanish La Liga',
    season: 2023,
    id: 140,
  },
  {
    name: 'Bundesliga',
    id: 78,
    season: 2023,
  },
  {
    name: 'Italian Serie A',
    id: 135,
    season: 2023,
  },
  {
    name: 'French Ligue 1',
    id: 61,
    season: 2023,
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="center">Some Football Stats</h1>
      <main>
        <ul>
          {leagues.map((league) => (
            <li key={`${league.id}`}>
              <Link href={`/league/${slugify(league.name, { lower: true })}/${league.id}/${league.season}`}>
                {league.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
