module.exports = {
  
  siteMetadata: {
    title: 'R.J. SCHODOWSKI',
    author: 'R.J. Schodowski'
  },

  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
    
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
