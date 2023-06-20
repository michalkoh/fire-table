import React from 'react'
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'
import Seo from '../components/Seo';

const HomeIndex = () =>  {

    const {t} = useTranslation();
    
    return (
        <Layout>
            <Seo title={t("Home")} />

            <section id="banner" className="major bkg-image-grid">
                <StaticImage className="bkg-image" alt="" src="../assets/images/banner.jpg" placeholder="blurred"/>
                <div className="inner bkg-image-content">
                    <header className="major">
                        <h1><Trans>Customized Firetables</Trans></h1>
                    </header>
                    <div className="content">
                        <p><Trans>Enjoy a new modern fire</Trans></p>
                    </div>
                </div>
            </section>

            <div id="main">
                <section id="one" className="tiles">

                    <article className="bkg-image-grid">
                        <StaticImage className="bkg-image" alt="" src="../assets/images/pic01.jpg" placeholder="blurred"/>
                        <div className="bkg-image-content">
                            <header className="major">
                                <h3><Trans>Portfolio</Trans></h3>
                                <p><Trans>Discover our work</Trans></p>
                            </header>
                        </div>
                        <Link  to="/portfolio" className="link primary"></Link>
                    </article>

                    <article className="bkg-image-grid">
                        <StaticImage className="bkg-image" alt="" src="../assets/images/pic02.jpg" placeholder="blurred"/>
                        <div className="bkg-image-content">
                            <header className="major">
                                <h3><Trans>About us</Trans></h3>
                                <p><Trans>Who we are and what we are doing</Trans></p>
                            </header>
                        </div>
                        <Link  to="/about" className="link primary"></Link>
                    </article>
                </section>
            </div>

        </Layout>
    )
}

export default HomeIndex

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
        }
    }
`;