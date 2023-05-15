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
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
            </section>
        </div>
        <Contact />

    </Layout>
)

export default About