import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
      <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
