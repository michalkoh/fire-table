import React from "react"
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title}) => {

    const { site } = useStaticQuery(
        graphql`
          query MyQuery{
            site {
              siteMetadata {
                title
                description
                author
                keywords
                image
              }
            }
          }
        `
        )
        const image = site.siteMetadata.image
        const keywords = site.siteMetadata.keywords
        const metaDescription = description || site.siteMetadata.description
        const defaultTitle = site.siteMetadata?.title

    
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: keywords,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: image,
                }
          ].concat(meta)}
        />
    )
}

Seo.defaultProps = {
    description: ``,
    lang: `en`,
    meta: [],
    title: `hello`
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
}

export default Seo