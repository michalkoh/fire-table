import React from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Banner from '../components/Banner'
import Seo from '../components/Seo';

const About = (props) => {

    const {t} = useTranslation();

    return (
        <Layout>

            <Seo title={t("About")} />

            <Banner title={t("About")} content={t("Who we are and what we are doing")} image={props.data.image} />

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <Trans i18nKey="about_content">
                            <p>We are a team of dedicated professionals who design and fabricate sustainable lightweight concrete products unlike anything else on the market.</p>
                            <p>Inspired by architecture, and through years of research and development of the highest quality materials, we have designed a unique ultra-light concrete that has revolutionized the way concrete is designed and installed. We are also offering a wide range of colors in quartz or granite.</p>
                            <p>And the customer can choose wood or stainless for the base.</p>
                            <p>So, we’re changing things. It’s that simple.</p>
                        </Trans>
                    </div>
                </section>
            </div>
            <Contact />

        </Layout>
    )
}

export default About

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        },
        image: file(relativePath: {eq: "about_us.jpeg"}) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;