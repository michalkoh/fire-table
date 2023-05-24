import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Banner = (props) => {
    const image = getImage(props.image);

    return (
        <section id="banner" className="bkg-image-grid style2">
            <GatsbyImage className="bkg-image" alt="" image={image} placeholder="blurred"/>
            <div className="inner bkg-image-content">
                <header className="major">
                    <h1>{props.title}</h1>
                </header>
                <div className="content">
                    <p>{props.content}</p>
                </div>
            </div>
        </section>
    );
}

export default Banner