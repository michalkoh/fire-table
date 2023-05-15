import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

import pic_portfolio_01 from '../assets/images/pic_portfolio_01.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic01.jpg'

const Portfolio = (props) => (
    <Layout>
        <Helmet>
            <title>Firetable - Portfolio</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <Banner title='Portfolio' content='Disover our work' class='portfolio style2' />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>The combination of table and fireplace in harmony. You don't have to deal with a compromise if you want to sit in the warmth around the fire and have somewhere to put a glass or something to eat, or chat with friends and family.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={pic_portfolio_01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Concrete Fire Pit Table</h3>
                            </header>
                            <p>The Concrete Fire Pit Table - Sparkle Ignition is designed to be the center of attention in any outdoor space. Made using quality wood or stainless for the base and a waterproof concrete or quartz on the top. Molded out of supercast concrete, this fire table is built to last.</p>
                            <p>It is made in the Slovakia and utilizes a UL listed burner - demonstrating the kind of quality you can trust. A simple door is built into the base in order to provide easy access to a propane tank and the burner fittings below the table surface. 
                                Get that centerpiece your patio is missing with the Concrete Fire Pit Table - Sparkle Ignition!
                            </p>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
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

export default Portfolio