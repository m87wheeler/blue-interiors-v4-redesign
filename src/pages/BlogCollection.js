import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { dateFormat } from "../assets/logic/dateFormat"

import BlogFront from "../components/BlogFront"
import PageHeader from "../components/PageHeader.js"

const BlogCollectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const BlogCollection = props => {
  const blogArray = props.data.map(post => {
    return (
      <Link to={`blog/${post.slug}`} key={post.slug}>
        <BlogFront
          imgsrc={post.metadata.post_image.imgix_url}
          category={post.metadata.post_category}
          published={dateFormat(post.metadata.published)}
          title={post.title}
          blurb={post.metadata.post_blurb}
        />
      </Link>
    )
  })

  return (
    <React.Fragment>
      <PageHeader text="Blog" />
      <BlogCollectionContainer>
        {props.loading ? <p>Loading...</p> : blogArray}
      </BlogCollectionContainer>
    </React.Fragment>
  )
}

export default BlogCollection
