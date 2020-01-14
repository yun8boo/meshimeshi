import App from 'next/app'
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/layout'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}