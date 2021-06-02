import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { StaticImage } from 'gatsby-plugin-image'
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <div className="flex">
        <div>
          <h1>Hi! I'm R.J.</h1>
          <p>I am a social-minded web developer who gets major fulfillment in coding projects that positively impact people from all walks of life.</p>       
          <Link to="/about">More about me
            <IconButton>
              <ArrowRightAltIcon />
            </IconButton>
          </Link>
        </div>
        <div>
          <StaticImage
            src="../images/profilephoto-removebg.png"
            alt="profile photo of R.J. Schodowski"
            placeholder="blurred"
            layout="fixed"
            maxWidth={400}
            maxHeight={400} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage 