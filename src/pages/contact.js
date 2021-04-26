import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
            <Layout>
                <Head title="Contact"/>
                <h1>Contact</h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Name" />
                    <TextField id="standard-basic" label="Subject" />
                    <TextField id="standard-basic" label="Email Address" />
                    <TextField
                        id="standard-multiline-static"
                        label="Messages"
                        multiline
                        rows={5}
                        defaultValue="Default Value"
                        variant="filled"
                        />
                </form>
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