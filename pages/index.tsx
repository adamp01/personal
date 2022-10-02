import type { NextPage } from 'next'
import Head from 'next/head'
import Carousel from '../components/carousel/Carousel'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Adam Wood" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          About Me
        </h1>

        <p className={styles.description}>
          
        </p>

        <Carousel data={[{src: "/images/me.png", caption: "Adam Wood"}, {src: "/images/racing.png", caption: "My first bike race."}]} width='500' height='500' transition={10000} />
      </main>
    </div>
  )
}

export default Home
