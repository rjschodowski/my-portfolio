import React, { useReducer } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
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

const initialValues = {
  name: "",
  subject: "",
  email: "",
  message: "",
}

const initialErrors = {
  name: false,
  subject: false,
  email: false,
  message: false,
}

const reducer = (currentState, nextState) => ({ ...currentState, ...nextState });

const [values, setValues] = useReducer(reducer, initialValues);
const [errors, setErrors] = useReducer(reducer, initialErrors);

const onChange = (e) => {
  setValues({ [e.target.id]: e.target.value });
}

const onFocus = (e) => {
  setErrors({ [e.target.id]: false });
}

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

for(const key in values){
  if(!values[key]){
    setErrors({ [key]: true });
    return;
  }
  setErrors({ [key]: false });
};

fetch("/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: encode({
    "contact": e.target.getAttribute("name"),
    ...values,
  })
})
.then(()=> console.log("success"))
.catch((e) => console.log("Error :", e));

const Contact = ({ children })=> {
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
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className={classes.root}>
              <input type="hidden" name="form-name" value="contact"></input>
              <TextField
                id="standard"
                name="name"
                label="Name"
                onChange={onChange}
                onFocus={onFocus}
                error={errors.name}
                value={values.name} />
              <TextField
                id="standard"
                name="subject"
                label="Subject"
                onChange={onChange}
                onFocus={onFocus}
                error={errors.subject}
                value={values.subject} />
              <TextField
                id="standard"
                name="email"
                label="Email"
                onChange={onChange}
                onFocus={onFocus}
                error={errors.email}
                value={values.email} />
              <TextField
                id="standard-multiline-static"
                name="message"
                label="Message"
                multiline
                rows={5}
                onChange={onChange}
                onFocus={onFocus}
                error={errors.message}
                value={values.message}
              />
              <Button variant="contained" color="primary" typse="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;
