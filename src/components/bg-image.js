import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import { bgStyle } from '../styles/bg-image.css'

const GbiBridged = () => {
    const { backgroundImageGlobe } = useStaticQuery(
        graphql`
        query {
                backgroundImageGlobe:  file(relativePath: {eq: "globe.jpg"}) {
                    childImageSharp {
                    gatsbyImageData(
                        width: 2000
                        transformOptions: {fit: COVER}
                        quality: 50
                        webpOptions: {quality: 70}
                    )
                    }
                }
            }
        `
    )


    const pluginImage = getImage(backgroundImageGlobe)

    return (
        <BgImage image={pluginImage} className={bgStyle}>
            test
        </BgImage>
    )
}

export default GbiBridged