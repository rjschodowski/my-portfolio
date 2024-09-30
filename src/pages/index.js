import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import IconButton from '@material-ui/core/IconButton'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { bodyContainer, introductionSection, heading, headingDescription, heroImage, link, arrow } from '../styles/index.module.css'


const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home"/>
      <div className={bodyContainer}>
        <div className={introductionSection}>
          <h3 className={heading}>Hi! I'm R.J.</h3>
          <p className={headingDescription}>Fueled by passion and innovation, I create digital products that positively enhance people’s lives, across the globe.</p>       
          <Link to="/about" className={link}>More about me
            <IconButton>
              <ArrowRightAltIcon className={arrow} />
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