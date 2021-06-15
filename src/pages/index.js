import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { StaticImage } from 'gatsby-plugin-image'
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { bodyContainer, introductionSection, heading, headingDescription, heroImage, link } from '../styles/index.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <div className={bodyContainer}>
        <div className={introductionSection}>
          <h1 className={heading}>Hi! I'm R.J.</h1>
          <p className={headingDescription}>I am a socially-conscious web developer who seeks to develop and collaborate on projects that positively impact people from all walks of life.</p>       
          <Link to="/about" className={link}>More about me
            <IconButton>
              <ArrowRightAltIcon />
            </IconButton>
          </Link>        
        </div>
        <div className={heroImage}>
          <StaticImage
              src="../images/profilephoto-removebg.png"
              alt="profile photo of R.J. Schodowski"
              placeholder="blurred"
              layout="constrained"
              maxWidth={800}
              maxHeight={800} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage 