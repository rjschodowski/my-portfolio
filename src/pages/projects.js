import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { heading } from '../styles/projects.module.css'

const Projects = () => {
    return (
        <Layout>
            <Head title="Projects"/>
            <h1 className={heading}>Lansing Help Guide</h1>
            <p>For now this is the space where a description of SOS Lansing will be.</p>
            <p>Want to work with me? <Link to="/contact">Reach out</Link>.</p>
        </Layout>
    )
}

export default Projects