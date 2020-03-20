import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from '@emotion/core';
import globalStyles from '../styles/global';
import Header from './header/header';
import 'Footer'import Footer from './footer/footer';
 from './footer/footer';


const main = css`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />

      <Global styles={globalStyles} />
      <main css={main}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
