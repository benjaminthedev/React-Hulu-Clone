import Head from 'next/head'
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Results from '../Components/Results/Results'
import requests from '../utils/requests';

export default function Home({ results }) {
  return (
    <div> 
      <Head>
        <title>React Hulu Clone - BenjaminTheDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <Nav />
        <Results results={results}  />
    </div>
  );
}

//Server Side Rendering (nextjs)
export async function getServerSideProps(context) {

  const genre = context.query.genre;

  const request = await fetch(`
    https://api.themoviedb.org/3${
      requests[genre]?.url ||  requests.fetchTrending.url
    }`
  ).then(res => res.json());

  return {
    props: {
      results: request.results
    }, // will be passed to the page component as props
  }
}