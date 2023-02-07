import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Local Hire New York - Job Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Local Hire New York" />
        <p className="description">
          We get you hired, trained, and paid.
        </p>
      </main>

      <Footer />
    </div>
  )
}
