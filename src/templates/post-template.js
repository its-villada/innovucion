import React from "react"
import { Disqus } from 'gatsby-plugin-disqus'
import Container from "react-bootstrap/Container"
import { PageLayout, PageTitle } from "../components"

import SEO from "../utils/seo"

export default ({ title, excerpt, html, subTitle, url, date }) => (
  <PageLayout>
    <SEO title={title} description={excerpt} />
    <Container className="text-center px-1" fluid>
      <PageTitle title={title} />
      {subTitle}
      <Container className="text-left">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      <Disqus
        config={
          {
            "url": url,
            identifier: date,
            title: title,
          }
        }
      />
      </Container>
    </Container>
  </PageLayout>
)
