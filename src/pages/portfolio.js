import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'

const Portfolio = (props) => (
    <Layout>

        <section id="banner" className="bkg-image-grid style2">
            <StaticImage className="bkg-image" alt="" src="../assets/images/portfolio.jpg" placeholder="blurred"/>
            <div className="inner bkg-image-content">
                <header className="major">
                    <h1>Portfolio</h1>
                </header>
                <div className="content">
                    <p>Disover our work</p>
                </div>
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>The combination of table and fireplace in harmony. You don't have to deal with a compromise if you want to sit in the warmth around the fire and have somewhere to put a glass or something to eat, or chat with friends and family.</p>
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
                                <h3>The Concrete Fire Pit Table</h3>
                            </header>
                            <p>The Concrete Fire Pit Table - Sparkle Ignition is designed to be the center of attention in any outdoor space. Made using quality wood or stainless for the base and a waterproof concrete or quartz on the top. Molded out of supercast concrete, this fire table is built to last.</p>
                            <p>It is made in Slovakia and utilizes a UL listed burner - demonstrating the kind of quality you can trust. A simple door is built into the base in order to provide easy access to a propane tank and the burner fittings below the table surface. 
                                Get that centerpiece your patio is missing with the Concrete Fire Pit Table - Sparkle Ignition!
                            </p>
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

export const Head = () => (
    <>
      <title>Firetable - Portfolio</title>
      <meta name="description" content="portfolio" />
    </>
  )

export default Portfolio