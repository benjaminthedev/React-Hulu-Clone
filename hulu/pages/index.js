import Head from 'next/head'
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'



export default function Home() {
  return (
    <div>
      <Head>
        <title>React Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      {/* Nav */}
      <Nav />


      {/* Results */}
    
    </div>
  )
}