/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Row, Container} from "react-bootstrap"
import Header from "./header"
import "./layoutpages.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle="Entraprenureship" />
      <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `0 1.0875rem 1.45rem`,
          }}
      >
        <main>{children}</main>
        {/* <Container style={{marginBottom:"0 important"}}><Row><footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer></Row></Container> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
