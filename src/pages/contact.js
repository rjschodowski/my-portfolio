import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        </Layout>
    )
}

export default Contact