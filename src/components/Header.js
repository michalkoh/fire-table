import React, { useState } from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types'

const Header = (props) => {

    // change nav transparency when scrolling
    const isBrowser = () => typeof window !== "undefined"
    const [transparent, setTransparent] = useState(true);
    const changeNavTransparency = () => {
        if (isBrowser()){
            setTransparent(window.scrollY < 180);
        }
    }

    isBrowser() && window.addEventListener('scroll', changeNavTransparency);

    // localization
    const {languages, originalPath, i18n} = useI18next();

    return (
        <header id="header" className={transparent ? 'alt' : ''}>
            <Link to="/" className="logo">
                <strong>FIRETABLE</strong>
            </Link>
            { languages.map((lng) => (
                <Link key={lng} className={ i18n.resolvedLanguage === lng ? 'logo lang selected' : 'logo lang' } to={originalPath} language={lng}>
                  {lng}
                </Link>
            )) }
            <nav>
                <a className="menu-link" onClick={props.onToggleMenu}>Menu</a>
            </nav>
        </header>
    );
};

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
