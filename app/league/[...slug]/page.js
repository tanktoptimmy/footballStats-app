import Link from 'next/link';
import Main from './Main';

async function getData(slug) {
  console.log("****************")
  console.log(process.env)
  console.log(process.env.VERCEL_URL)
  const baseURL = process.env.VERCEL_URL ? `football-stats-app-git-master-timparry.vercel.app` : 'http://localhost:3000';

  const url = `${baseURL}/api/fixtures?id=${slug[1]}&season=${slug[2]}`;
  console.log("URL*****")
  console.log(url)
  console.log('^^^^^^^^^^')
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function League({ params }) {
  const { slug } = params;
  const data = await getData(slug);
  const events = data?.data;
  if (!events || !events.length === 0) {
    return (
      <>
        <Link href="/">Home</Link>
        <p>Sorry we have had a problem getting data</p>
      </>
    );
  }
  const leagueName = events[0]?.league?.name || 'popo';
  return (
    <>
      <div className="flex-line">
        <Link href="/">Home</Link> <span>/</span>
        {leagueName}
      </div>
      <Main events={events} />
    </>
  );
}
