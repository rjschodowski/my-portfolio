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
            <p>Created by {data.site.siteMetadata.author}, &#169; 2021</p>
        </div>
    )
}

export default Footer