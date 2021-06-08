import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { StaticImage } from 'gatsby-plugin-image'
import { heading, contentContainer, contentText, contentImage } from '../styles/about.module.css'


const About = () => {
    return (
        <Layout>
            <Head title="About"/>
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
                    <p>It was my curiosity of coding languages paired with my social work background and drive to get information to people in need that 
                    led me to web development. From my first line of rendered code to the web browser I instantly unearthed a new passion: building web technology
                    with the purpose of improving and enhancing people’s lives.</p>
                    <p>I have learned over the past two years that what I love most about coding is knowing that whatever I am building will be useful 
                    for someone. Whether it's a personal music or photography website, a survey form to gather feedback on a particular product, or a community
                    resource progressive web app (my latest project) that I am working on, it all can be used to enhance or improve life for people. This is the greatest
                    pleasure for me.</p>
                    <p>I have been enjoying working with HTML, CSS layouts, JavaScript, and more recently, React, to create websites with clean code and clean UX. The
                        more experience I gain through building various projects and learning from my mentors, the more excited I have become about collaborating with
                        others who desire to build products that will positively impact humanity in the greatest of ways.</p>
                    <p>I'm currently looking to contribute my skills to a team where I can prove my skills while growing in my capabilities. If you are looking for a
                        highly-motivated, teachable, and socially-conscious developer, let's chat. </p>
                    <p><Link to="/contact">Want to work with me? Reach out</Link>.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About