import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )
}

export default MyApp
