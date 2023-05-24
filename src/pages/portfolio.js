import React from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Link, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'

const Portfolio = (props) => {

    const {t} = useTranslation();

    return (
        <Layout>

            <Banner title={t("Portfolio")} content={t("Discover our work")} image={props.data.image} />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <Trans i18nKey="portfolio_content">
                            <p>The combination of table and fireplace in harmony. You don't have to deal with a compromise if you want to sit in the warmth around the fire and have somewhere to put a glass or something to eat, or chat with friends and family.</p>
                        </Trans>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link to="#" className="image">
                            <StaticImage src="../assets/images/pic_portfolio_02.jpg" placeholder="blurred" alt="The Concrete Fire Pit Table" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>
                                        <Trans i18nKey="portfolio_table_header">
                                            The Concrete Fire Pit Table
                                        </Trans>
                                    </h3>
                                </header>
                                <Trans i18nKey="portfolio_table_content">
                                    <p>The Concrete Fire Pit Table - Sparkle Ignition is designed to be the center of attention in any outdoor space. Made using quality wood or stainless for the base and a waterproof concrete or quartz on the top. Molded out of supercast concrete, this fire table is built to last.</p>
                                    <p>It is made in Slovakia and utilizes a UL listed burner - demonstrating the kind of quality you can trust. A simple door is built into the base in order to provide easy access to a propane tank and the burner fittings below the table surface.</p>
                                    <p>Get that centerpiece your patio is missing with the Concrete Fire Pit Table - Sparkle Ignition!</p>
                                </Trans>
                            </div>
                        </div>
                    </section>
                    {/*<section>
                <div>
                    <StaticImage src="../assets/images/pic_portfolio_01.jpg" alt="A dinosaur" />
                </div>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3>Rhoncus magna</h3>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                        <ul className="actions">
                            <li><Link to="/generic" className="button">Learn more</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <Link to="/generic" className="image">
                    <img src={pic10} alt="" />
                </Link>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3>Sed nunc ligula</h3>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                        <ul className="actions">
                            <li><Link to="/generic" className="button">Learn more</Link></li>
                        </ul>
                    </div>
                </div>
            </section> */}
                </section>
            </div>

        </Layout>
    )
}

export const Head = () => (
    <>
      <title>Firetable - Portfolio</title>
      <meta name="description" content="portfolio" />
    </>
  )

export default Portfolio

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
        image: file(relativePath: {eq: "portfolio.jpg"}) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;