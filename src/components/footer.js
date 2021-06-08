import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
        <nav className="flex justify-between mt-12">
            <p className="mb-1">&#169; 2021 {data.site.siteMetadata.author}</p>
            <ul className="flex m-0 p-0">
                <li><a href="https://github.com/rjschodowski" alt="R.J. Schodowski GitHub profile" target="_blank" rel="noreferrer">github</a></li>
                <li className="px-2"><a href="https://www.linkedin.com/in/rjschodowski/" alt="R.J. Schodowski LinkedIn profile" target="_blank" rel="noreferrer">linkedin</a></li>
                <li className=""><a href="https://twitter.com/RJSchodowski" alt="R.J. Schodowski Twitter profile" target="_blank" rel="noreferrer">twitter</a></li>
            </ul>
            
        </nav>
    )
}

export default Footer