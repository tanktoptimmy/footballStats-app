import Link from 'next/link'
import slugify from 'slugify'

const leagues = [
  {
    name: 'Premier League',
    season: 2023,
    id: 39
  },
  {
    name: 'Sky Bet Championship',
    season: 2023,
    id: 40
  },
  {
    name: 'La Liga',
    season: 2023,
    id: 140
  }
]

const Home = () => {
  return (
    <div>
      <h1>Football stats are here</h1>
      <ul>
        {leagues.map(league => (
          <li key={`${league.id}`}>
            <Link
              href={`/league/${slugify(league.name, { lower: true })}/${
                league.id
              }/${league.season}`}
            >
              {league.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
