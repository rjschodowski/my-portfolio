import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Head from '../components/head'
import { heading } from '../styles/projects.css'

const Projects  = () => {
    return (
        <Layout>
            <Head title="Projects" />
            <h1 className={heading}>Projects</h1>
            <Link to="/lansinghelp">
                <StaticImage
                    src="../images/mobilehomescreen.png"
                    alt="mobile version of application's home screen"
                    placeholder="blurred"
                    layout="constrained"
                    maxWidth={800}
                    maxHeight={800} />           
                <h3>Lansing Help Guide</h3>
            </Link>
        </Layout>
    )
}

export default Projects