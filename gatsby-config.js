module.exports = {
  siteMetadata: {
    title: "Firetable",
    description: "Building customized fire pit tables to enjoy an evening in your yard. We'll do our best to fulfill all your wishes.",
    contact: "info@firetable.eu",
    author: "firetable.eu",
    keywords: "fire pit, fire table, gas table, concrete, quartz, garden",
    image: "/web-icon-wb.png",
    siteUrl: "https://www.firetable.eu/"
    },
    plugins: [
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: 'FIRETABLE',
            short_name: 'firetable',
            start_url: '/',
            background_color: '#CD7F32',
            theme_color: '#CD7F32',
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
            siteUrl: `https://www.firetable.eu`,
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
    },
    {
        resolve: "gatsby-plugin-sitemap",
        options: {
            query: `
            {
                allSitePage {
                    nodes {
                        path
                    }
                }
                allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
                nodes {
                    ... on WpPost {
                        uri
                        modifiedGmt
                        }
                    ... on WpPage {
                        uri
                        modifiedGmt
                        }
                    }
                }
            }
        `,
            resolveSiteUrl: () => siteUrl,
            resolvePages: ({
                allSitePage: { nodes: allPages },
                allWpContentNode: { nodes: allWpNodes },
            }) => {
                    const wpNodeMap = allWpNodes.reduce((acc, node) => {
                        const { uri } = node
                        acc[uri] = node

                    return acc
                }, {})

                return allPages.map(page => {
                    return { ...page, ...wpNodeMap[page.path] }
                })
            },
            serialize: ({ path, modifiedGmt }) => {
                return {
                    url: path,
                    lastmod: modifiedGmt,
                }
            },
        },
    },
    ],
}
