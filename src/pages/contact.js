import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { heading, contactContainer } from '../styles/contact.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
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
        <h1 className={heading}>Contact</h1>
        <div>
          <form name="contact" method="POST" data-netlify="true" className={classes.root} noValidate autoComplete="off">
            <TextField required id="standard-required" label="Name" />
            <TextField required id="standard-required" label="Subject" />
            <TextField required id="standard-required" label="Email Address" />
            <TextField
              required
              id="required"
              id="standard-multiline-static"
              label="Messages"
              multiline
              rows={5}
            />
            <Button variant="contained" color="primary">Submit</Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
