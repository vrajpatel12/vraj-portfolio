import Layout from '../presentation/components/common/layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
