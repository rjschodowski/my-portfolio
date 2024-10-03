import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { heading, projectsContainer, project, projectRow, introText, textDescription, projectImage, subheading } from '../styles/projects.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Projects  = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Projects" />
            <h1 className={heading}>Projects</h1>
            <div className={projectsContainer}>
                <div className={textDescription}>
                    <h3 className={textDescription}>UI and Graphic Designs</h3>
                </div>
                <div className={projectRow}>
                    <div className={project}>
                        <Link to="/siteconstruction">
                            <div className={projectImage}>
                                <StaticImage
                                    src="../images/mobilehomescreen.png"
                                    alt="mobile version of application's home screen"
                                    placeholder="blurred"
                                    layout="constrained"
                                    maxWidth={800}
                                    maxHeight={800} />
                                </div>           
                            <h3 className={subheading}>Lansing Help Guide</h3>
                            <p className={textDescription}>
                                Lansing Help Guide, a solution to providing quick access to emergency services in Lansing, MI.
                            </p>
                            <Button variant="contained" color="primary">
                                VIEW PROJECT
                            </Button>
                        </Link>
                    </div>

                    <div className={project}>
                        <Link to="/siteconstruction">
                            <div className={projectImage}>
                                <StaticImage
                                    src="../images/Woof2Words.png"
                                    alt="mobile app image of Woof2Words Brand Development Guide"
                                    placeholder="blurred"
                                    layout="constrained"
                                    maxWidth={800}
                                    maxHeight={800} />
                            </div>
                            <h3 className={subheading}>Woof2Words</h3>
                            <p className={textDescription}>A brand development guide for a tech-savvy and inventive start-up company targeting dog parents everywhere.                     
                            </p>
                            <Button variant="contained" color="primary">
                                VIEW PROJECT
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className={textDescription}>
                    <h3 className={textDescription}>Marketing Communications</h3>
                </div>
                <div className={projectRow}>
                    <div className={project}>
                        <Link to="/siteconstruction">
                            <div className={projectImage}>
                                <StaticImage
                                    src="../images/chs.png"
                                    alt="mobile version of application's home screen"
                                    placeholder="blurred"
                                    layout="constrained"
                                    maxWidth={800}
                                    maxHeight={800} />
                                </div>           
                            <h3 className={subheading}>What We Really Think About Life at CHS</h3>
                            <p className={textDescription}>
                                Lorem ipsum gandalf shoots fireworks.
                            </p>
                            <Button variant="contained" color="primary">
                                VIEW PROJECT
                            </Button>
                        </Link>
                    </div>

                    <div className={project}>
                        <Link to="/siteconstruction">
                            <div className={projectImage}>
                                <StaticImage
                                    src="../images/globe.jpg"
                                    alt="mobile app image of Woof2Words Brand Development Guide"
                                    placeholder="blurred"
                                    layout="constrained"
                                    maxWidth={800}
                                    maxHeight={800} />
                            </div>
                            <h3 className={subheading}>Placeholder Project</h3>
                            <p className={textDescription}>Lorem ipsum Saruman is defeated.                     
                            </p>
                            <Button variant="contained" color="primary">
                                VIEW PROJECT
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Projects