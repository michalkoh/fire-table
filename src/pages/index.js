import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'
import BannerMajor from '../components/BannerMajor'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'

const HomeIndex = () =>  {
    return (
        <Layout>

            <BannerMajor />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url(${pic01})`}}>
                        <header className="major">
                            <h3>Portfolio</h3>
                            <p>Discover our work</p>
                        </header>
                        <Link to="/portfolio" className="link primary"></Link>
                    </article>
                    <article style={{backgroundImage: `url(${pic02})`}}>
                        <header className="major">
                            <h3>About us</h3>
                            <p>Who we are and what we are doing</p>
                        </header>
                        <Link to="/about" className="link primary"></Link>
                    </article>
                    <article style={{ display: "grid" }}>
                            {/* You can use a GatsbyImage component if the image is dynamic */}
                            <StaticImage
                                style={{
                                    position: "unset",
                                    overflow: "auto",
                                gridArea: "1/1",
                                // You can set a maximum height for the image, if you wish.
                                //maxHeight: 600,
                                }}
                                //layout="fullWidth"
                                // You can optionally force an aspect ratio for the generated image
                                // This is a presentational image, so the alt should be an empty string
                                alt=""
                                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                                src="../assets/images/pic02.jpg" 
                                placeholder="blurred"
                            />
                            <div
                                style={{
                                // By using the same grid area for both, they are stacked on top of each other
                                gridArea: "1/1",
                                position: "relative",
                                // This centers the other elements inside the hero component
                                placeItems: "center",
                                //display: "grid",
                                }}
                            >
                                {/* Any content here will be centered in the component */}
                                <h1>Hero text</h1>
                            </div>
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