import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'
import Contact from '../components/Contact'

const About = (props) => (
    <Layout>
        
        <section id="banner" className="bkg-image-grid style2">
            <StaticImage className="bkg-image" alt="" src="../assets/images/about_us.jpeg" placeholder="blurred"/>
            <div className="inner bkg-image-content">
                <header className="major">
                    <h1>About us</h1>
                </header>
                <div className="content">
                    <p>Who we are and what we are doing</p>
                </div>
            </div>
        </section>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <p>We are a team of dedicated professionals who design and fabricate sustainable lightweight concrete products unlike anything else on the market.</p>
                    <p>Inspired by architecture, and through years of research and development of the highest quality materials, we have designed a unique ultra-light
                         concrete that has revolutionized the way concrete is designed and installed. We are also offering a wide range of colors in quartz or granite.</p>
                    <p>And the customer can choose wood or stainless for the base.</p>
                    <p>So, we’re changing things. It’s that simple</p>
                </div>
            </section>
        </div>
        <Contact />

    </Layout>
)

export const Head = () => (
    <>
      <title>Firetable - About us</title>
      <meta name="description" content="about us" />
    </>
  )

export default About