// export default async function League(context) {
//   // const { params, req } = context
//   // console.log(params)
//   // const slug = params.slug
//   const baseURL = process.env.VERCEL_URL
//     ? `https://${req.headers.host}`
//     : 'http://localhost:3000'
//   const response = await fetch(
//     `${baseURL}/api/fixtures?id=39&season=2023`
//   )
//   const leagueData = await response.json()

//   return {
//     props: {
//       leagueData,
//       baseURL
//     }
//   }
// }

async function getData(slug) {
  const baseURL = process.env.VERCEL_URL
    ? `https://${req.headers.host}`
    : 'http://localhost:3000';

  const url = `${baseURL}/api/fixtures?id=${slug[1]}&season=${slug[2]}`;

  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export default async function League({params}) {
  const {slug} = params;
  console.log("slug:", slug)
  const data = await getData(slug)
  if(!data || !data.data){
    return <p>nothing</p>
  }
  return (
    <div>
      <h1>THIS IS IT</h1>
      {data.data.map(fixture => {
        return <div key={fixture._id}>{fixture.teams.home.name} v {fixture.teams.away.name}</div>
      })}
    </div>
  )
}



