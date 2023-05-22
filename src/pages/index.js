import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'
import BannerMajor from '../components/BannerMajor'

const HomeIndex = () =>  {
    return (
        <Layout>

            <BannerMajor />

            <div id="main">
                <section id="one" className="tiles">

                    <article className="bkg-image-grid">
                        <StaticImage className="bkg-image" alt="" src="../assets/images/pic01.jpg" placeholder="blurred"/>
                        <div className="bkg-image-content">
                            <header className="major">
                                <h3>Portfolio</h3>
                                <p>Discover our work</p>
                            </header>
                        </div>
                        <Link  to="/portfolio" className="link primary"></Link>
                    </article>

                    <article className="bkg-image-grid">
                        <StaticImage className="bkg-image" alt="" src="../assets/images/pic02.jpg" placeholder="blurred"/>
                        <div className="bkg-image-content">
                            <header className="major">
                                <h3>About us</h3>
                                <p>Who we are and what we are doing</p>
                            </header>
                        </div>
                        <Link  to="/about" className="link primary"></Link>
                    </article>
                </section>
            </div>

        </Layout>
    )
}

export const Head = () => (
    <>
      <title>Firetable</title>
      <meta name="description" content="firetable" />
    </>
  )

export default HomeIndex