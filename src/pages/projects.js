import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { heading } from '../styles/projects.module.css'

const Projects  = () => {
    return (
        <Layout>
            <Head title="Projects" />
            <h1 className={heading}>Lansing Help Guide</h1>
        </Layout>
    )
}

export default Projects