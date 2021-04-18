import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h2>My Story</h2>
            <p>Hi! I'm R.J., a social-minded web developer who gets major fulfillment in coding projects that positively impact people from all walks of life.</p>
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
        </Layout>
    )
}

export default About