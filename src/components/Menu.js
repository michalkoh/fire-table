import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Trans } from 'react-i18next'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li>
                    <Link onClick={props.onToggleMenu} to="/">
                        <Trans>Home</Trans>
                    </Link>
                </li>
                <li>
                    <Link onClick={props.onToggleMenu} to="/portfolio">
                        <Trans>Portfolio</Trans>
                    </Link>
                </li>
                <li>
                    <Link onClick={props.onToggleMenu} to="/about">
                        <Trans>About</Trans>
                    </Link>
                </li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
