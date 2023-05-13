import React from 'react'

const Banner = (props) => (

    <section id="banner" className={props.class}>
        <div className="inner">
            <header className="major">
                <h1>{ props.title }</h1>
            </header>
            <div className="content">
                <p>{ props.content }</p>
            </div>
        </div>
    </section>
)

export default Banner
