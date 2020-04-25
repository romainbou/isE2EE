/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaCreativeCommons, FaGithub } from 'react-icons/fa';

import Header from "./header"
import "./layout.css"
import "./layout-styles.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 1rem 1rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <a href="https://github.com/romainbou/ise2ee"><FaGithub/></a>
        <a href="https://creativecommons.org/licenses/by/4.0/"><FaCreativeCommons/></a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
