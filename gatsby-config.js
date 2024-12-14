
module.exports = {
  siteMetadata: {
    title: `Boas Curvas`,
    description: `Just some images of some bikes, honest.`,
    author: `mcdog`,
    siteUrl: `https://example.com`,
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: '2359043452',
        enableOnDevMode: true // if 'false', heap will be fired on NODE_ENV=production only
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
