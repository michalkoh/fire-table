import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Banner from '../components/Banner'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>Fire Table - About us</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <Banner title='About us' content='Who we are and what we are doing' class='about style2' />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <p>We are a team of dedicated professionals who design and fabricate sustainable lightweight concrete products unlike anything else on the market.</p>
                    <p>Inspired by architecture, and through years of research and development of the highest quality materials, we have designed a unique ultra-light concrete
                       that has revolutionized the way concrete is designed and installed. Also we offering choose from whole different colors of quartz or granite.</p>
                    <p>Base is also up to customer if prefer wood or stainless.</p>
                    <p>So, we’re changing things. It’s that simple</p>
                </div>
            </section>
        </div>
        <Contact />

    </Layout>
)

export default About