import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { FC } from 'react'

interface HLP {
  url: string
  name: string
}

const HeaderLink: FC<HLP> = ({ url, name }) => (
  <Link
    to={`${url}`}
    style={{
      color: `black`,
      textDecoration: `none`,
    }}
  >
    {name}
  </Link>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <h1>{siteTitle}</h1>
    <h2>
      <HeaderLink url="/" name={'Home'} />
      <br />
      <HeaderLink url="/manifesto/" name="Manifesto" />
      <br />
      <HeaderLink url="/about/" name="About" />
      <br />
      <HeaderLink url="/blog/" name="Blog" />
    </h2>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
