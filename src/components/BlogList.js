import React from "react"
import { BlogLink } from "../components"
import { Utils } from "../utils"
import { Container } from "react-bootstrap"

export default props => {
  const { allFeaturedImages, allPosts } = props;
  const regex = /\/[blog].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)


  return (
    <Container
      fluid
      className="p-3 w-auto text-left d-flex flex-wrap justify-content-center"
    >
      {allPosts.map(({ node }) => (
        <div key={node.id} className="p-3">
          <BlogLink
            to={node.fields.slug}
            featuredImage={featuredImageMap[node.fields.slug]}
            title={node.frontmatter.title}
            subtitle={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        </div>
      ))}
    </Container>
  )
}

