import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'
import { graphql } from "gatsby"
import PostTemplate from "./post-template"

const SubTitle = ({ ttr, date, author }) => (
  <h5 className="text-muted mb-5">
    Tiempo de lectura: {ttr} <small>min</small> | {date} | {author}
  </h5>
)

const ShareIcons = ({ url }) => (
  <div>
    <h6>Comparti este artículo: </h6>
    <EmailShareButton
      subject="Mira este artículo!"
      body={"¡Hola! Quiero compartir un artículo con vos: " + url}
      url={url}
    >
      <EmailIcon round />
    </EmailShareButton>
    <FacebookShareButton
      quote="Mira este artículo!"
      url={url}
    >
      <FacebookIcon round />
    </FacebookShareButton>
    <TwitterShareButton
      title="Mira este artículo!"
      hashtags={['cboard', 'AAC']}
      url={url}
    >
      <TwitterIcon round />
    </TwitterShareButton>
    <WhatsappShareButton
      title="Mira este artículo!"
      url={url}
    >
      <WhatsappIcon round />
    </WhatsappShareButton>
    <RedditShareButton
      title="Mira este artículo!"
      url={url}
    >
      <RedditIcon round />
    </RedditShareButton>
  </div>
)

export default ({ data }) => {
  const post = data.markdownRemark
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <div>
          <ShareIcons
            url={url}
          />
          <SubTitle
            ttr={post.timeToRead}
            date={post.frontmatter.date}
            author={post.frontmatter.author}
          />
        </div>
      }
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD-MM-YYYY")
      }
      excerpt
      timeToRead
    }
  }
`
