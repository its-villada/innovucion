import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="footer text-muted text-center my-4 py-4">
      <span className="m-auto">
        <b>{author}</b> &copy; {new Date().getFullYear()}. Con la ayudita de 
        <a href="https://github.com/martinbedouret/"> Martin Bedouret</a>.
      </span>
    </div>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
