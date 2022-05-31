import '../styles/globals.css'
import Layout from 'components/Layout'
import { AlertProvider } from 'context/AlertContext'

function MyApp({ Component, pageProps }) {

  return (
    <AlertProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlertProvider>

  )
}

export default MyApp
