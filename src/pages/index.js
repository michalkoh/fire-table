import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import BannerMajor from '../components/BannerMajor'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'

class HomeIndex extends React.Component {
    render() {

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
                    </section>
                </div>

            </Layout>
        )
    }
}

export const Head = () => (
    <>
      <title>Firetable</title>
      <meta name="description" content="firetable" />
    </>
  )

export default HomeIndex