import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { heading, contactContainer } from '../styles/contact.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        marginLeft: 0,
      },
    },
  }));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
            <Layout>
                <Head title="Contact"/>
                <div className={contactContainer}>
                  <h1 className={heading}>Contact</h1>
                  <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Name" />
                        <TextField id="standard-basic" label="Subject" />
                        <TextField id="standard-basic" label="Email Address" />
                        <TextField
                            id="standard-multiline-static"
                            label="Messages"
                            multiline
                            rows={5}
                            />
                    </form>
                    <Button variant="contained" color="primary">Submit</Button>
                  </div>
                </div>
            </Layout>
    )
}



// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }));
  
//   export default function BasicTextFields() {
//     const classes = useStyles();
  
//     return (
//       <form className={classes.root} noValidate autoComplete="off">
//         <TextField id="standard-basic" label="Standard" />
//         <TextField id="filled-basic" label="Filled" variant="filled" />
//         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       </form>
//     );
//   }