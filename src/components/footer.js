import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { footer } from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
  `)

    return (
        <div className={footer}>
            <ul>
                <li><a href="https://github.com/rjschodowski" alt="R.J. Schodowski GitHub profile" target="_blank">github</a></li>
                <li><a href="https://www.linkedin.com/in/rjschodowski/" alt="R.J. Schodowski LinkedIn profile" target="_blank">linkedin</a></li>
                <li><a href="https://twitter.com/RJSchodowski" alt="R.J. Schodowski Twitter profile" target="_blank">twitter</a></li>
            </ul>
            <p>Created by {data.site.siteMetadata.author}, &#169; 2021</p>
        </div>
    )
}

export default Footer