import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { heading, contactContainer, contactLayout, contactText, contactSocial, socialItem, socialText, socialIcon, contactForm } from '../styles/contact.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      marginLeft: 0,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Contact" />
      <div className={contactContainer}>
        <h1 className={heading}>Contact Me</h1>
        <div className={contactLayout}>
          <div className={contactSocial}>
            <div className={contactText}>
              <p>Want to get in touch with me? Feel free to connect with me on social media or via the contact form. I look forward to hearing from you!</p>
            </div>
            <div className={socialItem}>
              <a href="https://www.linkedin.com/in/rjschodowski/" alt="R.J. Schodowski LinkedIn profile" target="_blank" rel="noreferrer">
                <span className={socialIcon}>
                  <LinkedInIcon />
                </span>
                <span className={socialText}>linkedin</span>
              </a>
            </div>
            <div className={socialItem}>
              <a href="https://twitter.com/RJSchodowski" alt="R.J. Schodowski Twitter profile" target="_blank" rel="noreferrer">
                <span className={socialIcon}>
                  <TwitterIcon />
                </span>
                <span className={socialText}>twitter</span>
              </a>
            </div>
            <div className={socialItem}>
              <a href="https://github.com/rjschodowski" alt="R.J. Schodowski GitHub profile" target="_blank" rel="noreferrer">
                <span className={socialIcon}>
                  <GitHubIcon />
                </span>
                <span className={socialText}>github</span>
              </a>
            </div>
          </div>
          <div className={contactForm}>
            <form name="contact" method="POST" data-netlify="true" className={classes.root} noValidate autoComplete="off">
              <TextField required id="standard-required" label="Name" />
              <TextField required id="standard-required" label="Subject" />
              <TextField required id="standard-required" label="Email Address" />
              <TextField
                required
                id="required"
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={5}
              />
              <Button variant="contained" color="primary">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
