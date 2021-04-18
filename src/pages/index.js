import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hi! I'm R.J.</h1>
      <p>I am a social-minded web developer who gets major fulfillment in coding projects that positively impact people from all walks of life.</p>
      <Link to="/about">More about me</Link>
    </Layout>
  )
}

export default IndexPage 