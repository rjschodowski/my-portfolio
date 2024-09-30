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
                    <p className={textDescription}>I am always looking for projects to design and build, 
                    whether my own or working collaboratively with others.
                        Here is what I have accomplished so far and what I am
                        currently working on:
                    </p>
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
                                Lansing Help Guide, a solution to providing a quick starting point for Lansing, MI newcomers in accessing emergency services.
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
            </div>
        </Layout>
    )
}

export default Projects