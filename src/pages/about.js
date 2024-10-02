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
                        The year 2003 marked the genesis of my tech journey, where at Spring Arbor University I quickly found dorm life consisting of 
                        floor mates reverse engineering computers, programming, and playing hours of Call of Duty. Although I would go on to working 15 
                        years as a bilingual social worker, my intrigue for tech had been unwittingly kindled. In late 2018 I embarked on my first 
                        coding lessons, and by 2020, I <Link to="/lansinghelp" className={link}>built my first progressive web app</Link>, a local 
                        community human services directory, which led me to pursue a new passion: creating innovative, user-friendly technology that 
                        improves people's lives. 
                    </p>
                    <p>
                        In my current role, I work on a project team for an automotive product as an embedded software vehicle 
                        integrator and validation tester, focusing on software test design, automated scripting, and technical writing. I’m driven by 
                        the challenge of developing technically robust, user-centered software, and I enjoy learning and teaching new skills. In my free 
                        time, aside from making whimsical techno songs in Garage Band with my dog Scout and his silky vocals, I create progressive web 
                        apps using Affinity Designer, React, GraphQL, and Tailwind CSS, always with a focus on a thoughtful user experience and clean code.
                    </p>
                    <p>Let's connect. <Link to="/contact" className={link}>Drop me a line</Link> for any collaboration work or just to say hello!</p>
                </div>
            </div>
        </Layout>
    )
}

export default About
