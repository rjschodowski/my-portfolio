import React from 'react'
import { Link } from 'gatsby'
import { link } from '../styles/404.module.css'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>Thank you!</h1>
    <p>I will get back with you as quickly as possible.</p>
    <p><Link to="/" className={link}>Head home</Link></p>
  </Layout>
)