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
                        It all started in 2003 at university when my curiosity for computers and software kindled. I would regularly see my college 
                        roommate and dorm floor friends, mostly all CS majors, taking apart computers, programming, making electronic music, and 
                        discussing upcoming tech trends. Even the communal binge-watching of geeky Homestar Runner internet clips and the dizzying 
                        rounds of Stair Dismount games quite sparked my interest in digital tech, all thanks to my friends and the dawn of Web 2.0!
                    </p>
                    <p>
                        Though I went on to having a fulfilling 15 years as a bilingual social worker, the itching desire to understand and create 
                        useful technology remained within me. It was this drive, paired with my passion to improve people’s lives, which led me to 
                        software design and development. In 2020, <Link to="/lansinghelp" className={link}>when I built my first progressive web app</Link>, a hub for community human service 
                        resources, I had unearthed a new mission: Creating innovative and user-friendly technology with the purpose of serving the 
                        needs of others.
                    </p>
                    <p>
                        What I discovered about myself over the past 3 years at Bosch is that I deeply care about creating cleverly-designed, technically-robust, 
                        and user-centered software products. I also love learning new skills, putting them to use, and teaching them to others. Most 
                        fulfilling is watching a colleague put to use the new skill I just passed on to them! Additionally, I learned of the importance 
                        of project stakeholder collaboration, to ensure projects are technically solid and designed with the user’s experience always in 
                        mind.
                    </p>
                    <p>
                        At Bosch I have been working on Perfectly Keyless, in the roles of vehicle integrator and product testing. My skillset includes 
                        software test design and development, automated test scripting, FOTA updating, C code, and NFC, BLE, UWB, and CAN technologies. 
                        As a side hobby I work with a React, GraphQL, Material UI, and Tailwind CSS stack to build progressive web applications, all with 
                        clean code and clean UX.
                    </p>
                    <p>In these endeavors I have grown in confidence as a developer and design thinker, and am eager to continue collaborating on projects 
                        which positively impact humanity in the greatest of ways.
                    </p>
                    <p><Link to="/contact" className={link}>Want to work with me? Reach out</Link>.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About
