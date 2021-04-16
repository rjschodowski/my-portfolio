import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hi.</h1>
      <h2>I'm R.J. Schodowski, living in beautiful Michigan.</h2>
      <p>Need a developer? <Link to="https://twitter.com/RJSchodowski">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage 