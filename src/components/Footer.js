import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo/black_on_transparent.png"
import Image from "./image";

const Footer = ({ siteTitle }) => (
    <div
        style={{
            padding: '2rem',
            textAlign: 'center',
            fontSize: '14px',
            color: '#a6adc9',
            backgroundColor: '#f1f1fa'
        }}
    >
            <footer>
                © { new Date().getFullYear() } hapibees - Av. Dom João II 404 4º andar, Sala 45, Braga
            </footer>
    </div>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
