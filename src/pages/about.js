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
                    src="../images/profilephoto-removebg.png"
                    alt="profile photo of R.J. Schodowski"
                    placeholder="blurred"
                    layout="constrained"
                    maxWidth={800}
                    maxHeight={800} />
                </div>
                <div className={contentText}>
                    <p>
                        The year 2003 marked the genesis of my technological journey at university, where I frequently dropped in on my computer 
                        science friends’ programming sessions, dismantling computers, and binge-watching parties of the whimsical Homestar Runner 
                        internet cartoons. Although I would go on to working 15 rewarding years as a bilingual social worker post graduation, my 
                        kindled curiosity for tech swelled. In late 2018 I embarked on my first coding courses, and by 2020, I 
                        <Link to="/lansinghelp" className={link}>built my first progressive web app</Link> to support community human services, which led me to pursue a new passion: creating innovative, 
                        user-friendly technology that improves people's lives.
                    </p>
                    <p>
                        In my current role, I work on the project Perfectly Keyless as a vehicle integrator and product tester for our embedded 
                        software, focusing on software test design, automated scripting, and technologies like NFC, BLE, UWB, and CAN. I’m driven by 
                        the challenge of developing technically robust, user-centered software, and I enjoy learning and teaching new skills. In my 
                        free time, aside from making comical techno songs in Garage Band with the help of my dog Scout’s silky vocals, I build 
                        progressive web apps using React, GraphQL, and Tailwind CSS, always with a focus on clean code and thoughtful user experiences.
                    </p>
                    <p><Link to="/contact" className={link}>Want to work with me? Reach out</Link>.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About
