import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { heading, list, stack, links, listCategories, image, contentWrapper, textDescription, link, firstLink, secondLink, headline, subheading } from '../styles/woof2words.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Woof2Words = () => {
    return (
        <Layout>
            <SEO title="Woof2Words"/>
            <div className={contentWrapper}>
                <h1 className={heading}>Woof2Words</h1>
                <p className={textDescription}><i className={headline}>"Woof2Words is a ground-breaking app and collar technology that aims to improve pet parent and pet communication, deepening the pet parent - pet bond."</i>
                </p>
                <p className={textDescription}>The Woof2Words brand development guide was created with Affinity Designer and is hosted by Issuu.com.
                </p>
            </div>
            <div className={contentWrapper}>
                <Link to="/https://issuu.com/rjschodowski/docs/woof2wordsbranddevelopmentguide">
                    <div className={image}>
                        <StaticImage
                        src="../images/woof2words.png"
                        alt="Brand development guide image with link to the guide hosted on issuu.com"
                        placeholder="blurred"
                        layout="constrained"
                        maxWidth={800}
                        maxHeight={800} />
                    </div>
                    <Button variant="contained" color="primary">
                        VIEW FULL GUIDE
                    </Button>
                </Link>
            </div>
            
            <div className={contentWrapper}>
                <h3 className={subheading}>Project Background and Purpose</h3>
                <p className={textDescription}>Lansing Help Guide’s inspiration came from having been working with young adult, refugee youth 
                    transitioning into independent living in Lansing, Michigan. After having spent many days with refugee 
                    youth moving to Lansing, it became clear that many were unfamiliar with the city’s community resources, 
                    and I decided to create an easy-to-use app for them (and other Lansing newcomers) to have handy in case of 
                    an urgent or emergent need. The goal was not to create an exhaustive list of all local organizations and 
                    businesses in the city, but rather a quick and accessible starter guide with well-known and trusted resources for people who
                    are just getting to know Lansing.                    </p>
                <div className={image}>
                    <StaticImage
                        src="../images/desktopview.png"
                        alt="Desktop version view of application's screen"
                        placeholder="blurred"
                        layout="constrained"
                        maxWidth={800}
                        maxHeight={800} />
                </div>
            </div>

            <div className={contentWrapper}>
                <h3 className={subheading}>Problems Encountered</h3>
                <p className={textDescription}>
                    Lorem ipsum.
                </p>
                <p className={textDescription}>
                Lorem ipsum.
                </p>

                <h3 className={subheading}>Lessons Learned</h3>
                <p className={textDescription}>
                This experience of creating a branding guide for a startup company provided me the opportunity to learn to:
                </p>
                <ul className={list}>
                    <li>Develop a brand name</li>
                    <li>Explore various text and color palettes and create an official logotype</li>
                    <li>Create prototypes of print and digital products with branding</li>
                </ul>
                <p className={textDescription}>
                    Overall this project taught me to think more programmatically while maintaining a goal of providing a 
                    positive user experience. I also gained a lot of confidence in solving problems utilizing internet searches 
                    and consulting with other seasoned developers.
                </p>
                <p>Let's connect. <Link to="/contact" className={link}>Drop me a line</Link> for any collaboration work or just to say hello!</p>
            </div>
        </Layout>
    )
}

export default Woof2Words