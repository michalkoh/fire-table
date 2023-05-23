module.exports = {
  siteMetadata: {
    title: "Firetable",
    contact: "firetable@yahoo.com",
    description: "Portfolio Website Firetable"
  },
  plugins: [
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            icon: 'src/assets/images/web-icon.png'
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/assets/images/`
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `locale`,
            path: `${__dirname}/src/locales`
        }
      },
    {
        resolve: `gatsby-plugin-react-i18next`,
        options: {
            localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
            languages: [`en`, `sk`],
            defaultLanguage: `en`,
            siteUrl: `https://example.com`,
            // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
            trailingSlash: 'always',
            // you can pass any i18next options
            i18nextOptions: {
                interpolation: {
                escapeValue: false // not needed for react as it escapes by default
                },
                keySeparator: false,
                nsSeparator: false
            }
        }
      }
  ],
}
