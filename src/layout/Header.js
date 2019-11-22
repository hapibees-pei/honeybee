import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo/black_on_transparent.png"
import Image from "./image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(254, 196, 33)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1rem 0.8rem 1.5rem`
      }}
    >
        <Link
          to="/"
          style={{
              fontSize: 0
          }}
        >
            <img
                src={logo}
                height="40"
                style={{
                    marginBottom: 0
                }}
            />
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
