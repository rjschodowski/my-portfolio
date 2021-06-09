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
                    <p>It was my curiosity of computer programming and markup languages paired with my social work 
                        background and drive to get resources and information to people in need that led me to web 
                        development. From my first line of code to my first constructed web page, I began to unearthed a 
                        new mission: building web technology with the purpose of improving and enhancing people’s lives.</p>
                    <p>I have learned over the past two years that what I find most fulfilling about web development is 
                        building applications and websites that are useful, cleverly designed, and make life a little 
                        easier for users, all while learning and improving on new skills and technologies. I have also 
                        learned from other experienced developers to challenge myself to go beyond doing what is 
                        comfortable and trying out new technologies that I normally would not otherwise consider using. 
                        Lastly, I have learned of the importance of collaborating with developers, designers, and users 
                        to ensure projects are technically solid and designed with the user’s experience always in mind.</p>
                    <p>I have been working with HTML, CSS, JavaScript, and more recently, React, GraphQL, Material UI, and 
                        Tailwind CSS to create websites with clean code and clean UX. (You can see my latest work with these 
                        technologies here: https://lansinghelpguide.com.) As I have been working on various personal projects 
                        (and more recently, a collaborative React/TypeScript application project), I have grown in confidence as 
                        a developer, and more eager to work on more collaborative projects that will positively impact humanity in 
                        the greatest of ways.</p>
                    <p>I'm currently looking to contribute my skills to a team where I can prove my skills while growing in my capabilities. If you are looking for a
                        highly-motivated, teachable, and socially-conscious developer, let's chat. </p>
                    <p><Link to="/contact">Want to work with me? Reach out</Link>.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About