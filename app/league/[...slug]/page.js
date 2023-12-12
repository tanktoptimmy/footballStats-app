import Link from 'next/link'
import Main from "./Main"

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
  const data = await getData(slug)
  const events = data?.data;
  if(!events || !events.length === 0){
    return (
      <>
        <Link href="/">Home</Link>
        <p>Sorry we have had a problem getting data</p>
      </>
    )
  }
  return (
    <>
      <Link href="/">Home</Link>
      <Main events={events}/>
    </>
  )
}



