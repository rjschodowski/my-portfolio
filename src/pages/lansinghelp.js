import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { heading, list, stack, links, listCategories, image, contentWrapper, textDescription, link, firstLink, secondLink, headline, subheading } from '../styles/lansinghelp.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const LansingHelp = () => {
    return (
        <Layout>
            <SEO title="Lansing Help Guide"/>
            <div className={contentWrapper}>
                <h1 className={heading}>Lansing Help Guide</h1>
                <p className={`${textDescription} ${headline}`}>A quick starting point 
                    for Lansing newcomers in accessing help in times of need.
                </p>
                <p className={textDescription}>Lansing Help Guide is a React progressive web application, which was built using
                    the GraphQL-powered Gatsby.js static site generator, Tailwind CSS, and Material UI 
                    styled components.
                </p>
            </div>
            <div className={contentWrapper}>
                <div className={image}>
                    <StaticImage
                    src="../images/mobilehomescreen.png"
                    alt="mobile version of application's home screen"
                    placeholder="blurred"
                    layout="constrained"
                    maxWidth={800}
                    maxHeight={800} />
                </div>
                <div className={listCategories}>
                    <div className={stack}>
                        <h4>Stack</h4>
                        <ul className={list}>
                            <li>React</li>
                            <li>GraphQl</li>
                            <li>Gatsby.js</li>
                            <li>Tailwind CSS</li>
                            <li>Material UI</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                    <div className={links}>
                        <h4>Links</h4>
                        <ul className={list}>
                            <li className={firstLink}><a href="https://lansing-community-resources.netlify.app/" alt="Lansing Help Guide Website" target="_blank" rel="noreferrer">View site</a></li>
                            <li className={secondLink}><a href="https://github.com/rjschodowski/lansing-help-guide" alt="Lansing Help Guide GitHub repository" target="_blank" rel="noreferrer">Repository</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={contentWrapper}>
                <h3 className={subheading}>Project Background and Purpose</h3>
                <p className={textDescription}>Lansing Help Guide’s inspiration came from my experience working with young adult, refugee youth transitioning into independent living from foster care in Lansing, Michigan. After having spent many days with the youth in their homes as their house supervisor, it became evident that many were unfamiliar with the city’s community resources. I decided to create an easy-to-use app for them (and other Lansing newcomers) to have available in case of an urgent or emergent need. The goal was not to create an exhaustive list of all local organizations and businesses in the city, but rather a quick and accessible starter guide with well-known and trusted resources for people looking for assistance services who are just getting to know Lansing.
                </p>
                <p className={textDescription}>This project allows users to quickly access listed content (community resources) 
                items by phone, Google Maps, live chat (whenever available), and their respective websites. This project was built mobile-first due to the fact that the majority of users are more likely to be using mobile devices vs. laptop and desktop computers. The app is fully responsive and SEO-ready.
                </p>
                <p className={textDescription}>
                The first version of this progressive web app is far from being the last - upcoming versions will include more assistance categories, a language selector for the content to translate to other common languages spoken among the various cultures in the greater Lansing area, and finally a rating system for users to be able to share their experiences and ratings with other users.
                </p>
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
                <h3 className={subheading}>Conceptualization</h3>
                <p className={textDescription}>Prior to this project, I had already begun working on a website for Lansing residents and visitors, 
                    affectionately called Dónde Lansing. I had been starting to take my sketches and journey map to create a prototype, but it was 
                    when I realized the specific need for our independent living youth and other Lansing newcomers to have an simpler way to access 
                    emergency and other community services that I decided to shift from a full-blown visitor's guide to a human services resource for 
                    people in need, especially those arriving from different lands.
                </p>
                <div className={image}>
                    <StaticImage
                        src="../images/dondelansingmockup.png"
                        alt="Desktop version view of Dónde Lansing website"
                        placeholder="blurred"
                        layout="constrained"
                        maxWidth={800}
                        maxHeight={800} />
                </div>
                <p className={textDescription}>I had been starting to take my sketches and journey map to create a prototype, but it 
                    was when I realized the specific need for our independent living youth and other Lansing newcomers to have an simpler way to 
                    access emergency and other community services that I decided to shift from a full-blown visitor's guide to a human services 
                    resource for people in need, especially those arriving from different lands.
                </p>
                <p className={textDescription}>I started by taking the many resources I had already accumulated for the original website idea, and I 
                    selected the categories that seemed to come up most from our youth and also those that also are essential, such as domestic violence 
                    support centers.
                </p>
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
                    I knew during the ideation and design process that I wanted to include an emergency 911 button for users to easily access if needed. I initially thought to put the button at the top of the page under the header for visibility. I had a few of the youth and colleagues test out the app for user experience feedback, and the feedback I received was that the button may be touched unintentionally since it is likely the first thing the user will see. This feedback helped me to move the button to the footer component, where it is still visible and easily accessible, but less likely to be unintentionally pressed.

                </p>
                <p className={textDescription}>
                Of several technical problems I worked through, one particular challenge I faced was learning to style the Material UI button components. I had initially assumed I could easily style them using Tailwind CSS, but I rather quickly realized that this was not the case. This forced me to consult the Material UI button API documentation and the Net Ninja’s Material UI YouTube video series, and there I learned to customize and override default styles with CSS rules.
                </p>

                <h3 className={subheading}>Lessons Learned</h3>
                <p className={textDescription}>
                This, being my first progressive web application dev project, was truly a tremendous and exciting learning 
                experience. I learned how to:
                </p>
                <ul className={list}>
                    <li>Iterate between prototyping and getting user feedback, to better meet user needs</li>
                    <li>Create an engaging and recognizable brand design</li>
                    <li>Refactor code to create, use, and reuse React components</li>
                    <li>Use props for component variations</li>
                    <li>Perform a GraphQL query and add the code into Gatsby to make site features dynamic</li>
                    <li>Install and configure plugins</li>
                    <li>Troubleshoot site rendering problems</li>
                    <li>Enable the project for SEO</li>
                    <li>Use and modify Material UI components</li>
                    <li>Convert it to a progressive web app</li>
                    <li>Deploy the project to Netlify</li>
                </ul>
                <p className={textDescription}>
                 Overall this project pushed me to follow the human-centered design process from start to finish, and it also taught me to think more programmatically while maintaining the goal of providing a positive user experience. I also gained a lot of confidence in solving problems utilizing internet searches and consulting with other seasoned designers and developers.
                </p>
                <p>Let's connect. <Link to="/contact" className={link}>Drop me a line</Link> for any collaboration work or just to say hello!</p>
            </div>
        </Layout>
    )
}

export default LansingHelp