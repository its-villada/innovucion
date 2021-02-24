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
  <div className="mb-3">
    <h6>Comparti este artículo: </h6>
    <div className="ShareButtons">
    <EmailShareButton
      subject="Mira este artículo!"
      body={"¡Hola! Quiero compartir un artículo con vos: "}
      url={url}
    >
      <EmailIcon size={50} round />
    </EmailShareButton>
    <FacebookShareButton
      quote="Mira este artículo!"
      url={url}
    >
      <FacebookIcon size={50}  round />
    </FacebookShareButton>
    <TwitterShareButton
      title="Mira este artículo!"
      hashtags={['innovucion', 'educación']}
      url={url}
    >
      <TwitterIcon size={50}  round />
    </TwitterShareButton>
    <WhatsappShareButton
      title="Mira este artículo!"
      url={url}
    >
      <WhatsappIcon  size={50} round />
    </WhatsappShareButton>
    <RedditShareButton
      title="Mira este artículo!"
      url={url}
    >
      <RedditIcon  size={50} round />
    </RedditShareButton>
    </div>
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
