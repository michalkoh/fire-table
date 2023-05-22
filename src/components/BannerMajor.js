import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const BannerMajor = (props) => (
    <section id="banner" className="major bkg-image-grid">
        <StaticImage className="bkg-image" alt="" src="../assets/images/banner.jpg" placeholder="blurred"/>
        <div className="inner bkg-image-content">
            <header className="major">
                <h1>Different Experience</h1>
            </header>
            <div className="content">
                <p>Enjoy a New Modern Fire</p>
            </div>
        </div>
    </section>
)

export default BannerMajor
