import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

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


    const image = getImage(backgroundImageGlobe)
    const bgImage = convertToBgImage(image)

    return (
        <BackgroundImage
        tag="section"
        {...bgImage}
        preserveStackingContext>
            test
        </BackgroundImage>
    )
}

export default GbiBridged