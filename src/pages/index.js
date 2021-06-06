import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { StaticImage } from 'gatsby-plugin-image'
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { bodyContainer, introductionSection, heroImage }


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <div className={bodyContainer}>
        <div className={introductionSection}>
          <h1>Hi! I'm R.J.</h1>
          <p>I am a social-minded web developer who gets major fulfillment in coding projects that positively impact people from all walks of life.</p>       
          <Link to="/about">More about me
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
            maxWidth={600}
            maxHeight={600} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage 