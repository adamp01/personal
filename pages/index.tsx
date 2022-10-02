import Head from 'next/head'

import Carousel from '../components/carousel/Carousel'
import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

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
        <div>
          <p>
            Acquiring a Masters degree in Chemical Engineering, alongside doing a placement year at GSK in Barnard Castle, taught me a few things. Primarily that
            I want to live near my friends but also that I want to work on hard problems. Getting a job as a Project Manager for AdTech company Unruly fulfilled
            the first of these desires, but left a lot to be desired on the latter. The role itself was riddled with inefficient manual processes, the majority
            of which revolved around platforms with APIs. A friend suggested I try learning Python to see if I could, eventually, interface with some of these
            APIs to reduce the boring, automatable, component of the job. Long story short I achieved just that, and sparked an interest in software development
            in general as well as a more specific appreciation for automation and improving teams productivity. Since then I have been continuing to hone my skills
            as a developer from implementing new features in the Waterfox web browser to building entire marketing attribution pipelines to dabbling in high
            performance code with Rust.
          </p>
          <Carousel data={[{ src: "/images/me.png", caption: "" }, { src: "/images/racing.png", caption: "" }]} width='400' height='400' transition={10000} />
        </div>
      </main>
    </div>
  )
}

export default Home
