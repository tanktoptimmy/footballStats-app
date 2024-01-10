import Link from 'next/link';
import slugify from 'slugify';
import { GlowCard } from '@/components';
import './page.modules.css'

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
    name: 'Sky Bet League 1',
    season: 2023,
    id: 8181818188181181818818181818,
  },
  {
    name: 'Sky Bet League 2',
    season: 2023,
    id: 901019919191919191919191919,
  },
  {
    name: 'Spanish La Liga',
    season: 2023,
    id: 140,
  },
  {
    name: 'German Bundesliga',
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
      <main>
        <ul className="grid">
        <li className="title-holder">
        <section>
          <h1>Easy Football Stats</h1>
          <p>Get your easy to digest football stats here</p>
        </section>
        </li>
          {leagues.map((league) => (
            <li key={`${league.id}`}>
              <GlowCard px={"px-md"} py={"py-md"}>
                <Link href={`/league/${slugify(league.name, { lower: true })}/${league.id}/${league.season}`}>
                  <h2 className="glow-card-title">{league.name}</h2>
                </Link>
                <p className="title">Most wins (last 5)</p>
                <p>Most BTTS (last 5)</p>
                <p>Most Goals scored (last 5)</p>
                <p>Most Goals conceded (last 5)</p>
                <p>Most Goals conceded (last 5)</p>
                <p>Most Goals conceded (last 5)</p>
                <p>Most Goals conceded (last 5)</p>
                <p>Most Goals conceded (last 5)</p>
                <p>Most Goals conceded (last 5)</p>
              </GlowCard>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
