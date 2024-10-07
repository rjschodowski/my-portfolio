import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { heading, contentContainer, contentText, contentImage, link } from '../styles/about.module.css'

const About = () => {
    return (
        <Layout>
            <SEO title="About"/>
            <h1 className={heading}>My Story</h1>
            <div className={contentContainer}>
                <div className={contentImage}>
                    <StaticImage
                    src="../images/KT4_5361.jpg"
                    alt="profile photo of R.J. Schodowski"
                    placeholder="blurred"
                    layout="constrained"
                    maxWidth={800}
                    maxHeight={800} />
                </div>
                <div className={contentText}>
                    <p>
                        With a unique background in social work and software engineering, and having lived and worked in various parts of Latin America,
                        I bring a diverse perspective to UX design. I specialize in creating <Link to="/projects" className={link}>digital UI and graphic designs</Link>, 
                        and I'm passionate about crafting intuitive and visually appealing user experiences. My multi-faceted experience allows me to approach design 
                        challenges with empathy and creativity, ensuring that every project meets the needs of its users. 
                    </p>
                    <p>In my free time, aside from making whimsical techno songs in Garage Band with my dog Scout and his silky vocals, I enjoy making watercolor 
                        and acrylic paintings, as well as tasting the amazing zucchini bread my wife makes every year.</p>
                    <p>Let's connect. <Link to="/contact" className={link}>Drop me a line</Link> for any collaboration work or just to say hello!</p>
                </div>
            </div>
        </Layout>
    )
}

export default About
