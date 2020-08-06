import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import LandingPage from "../components/LandingPage"
import SectionIntroText from "../components/SectionIntroText"
import FlipTile from "../components/FlipTile"

const FullSectionLink = styled.p`
  color: var(--primary);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: var(--ls-narrow);
  text-align: center;
  margin-top: 2rem;
  font-size: 1.1rem;
`

const NothingHere = styled.p`
  background: var(--primary);
  width: 80%;
  margin-left: 10%;
  padding: 0.5rem 1rem;
  color: var(--text-white);
  text-align: center;
`

const Home = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [blogData, setBlogData] = useState([])
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    setBlogData(props.blogData)
    setProjectData(props.projectData)
    setIsLoading(false)
  }, [props.blogData, props.projectData])

  const loadBlogPostData = () => {
    return blogData.map(post => (
      <FlipTile
        key={post.slug}
        title={post.title}
        postDate={post.metadata.published}
        blurb={post.metadata.post_blurb}
        linkTo={post.slug}
        postImg={post.metadata.post_image.imgix_url}
        backgroundColor={"#566573"}
        section="blog"
      />
    ))
  }

  const loadProjectPostData = () => {
    return projectData.map(post => (
      <FlipTile
        key={post.slug}
        title={post.title}
        blurb={post.metadata.post_blurb}
        linkTo={post.slug}
        postImg={post.metadata.post_thumbnail.imgix_url}
        backgroundImg={post.metadata.post_mood_image.imgix_url}
        section="projects"
      />
    ))
  }

  return (
    <React.Fragment>
      <LandingPage style={{ zIndex: "10" }} />
      <SectionIntroText
        title="Recent Blog Posts"
        // content="An introduction to what your blog posts are about, what to expect from them, and the kind of things you hope your readers can learn from them."
      />
      {}

      {blogData ? (
        isLoading ? (
          <p>Loading...</p>
        ) : (
          loadBlogPostData().splice(0, 3)
        )
      ) : (
        <NothingHere>There doesn't seem to be anything here...</NothingHere>
      )}

      <Link to="/blog">
        <FullSectionLink>See all of my blog posts</FullSectionLink>
      </Link>
      <SectionIntroText
        title="Recent Project Posts"
        // content="An introduction to what your project posts are about, what to expect from them, and the kind of things you hope your readers can learn from them."
      />
      {projectData ? (
        isLoading ? (
          <p>Loading...</p>
        ) : (
          loadProjectPostData().splice(0, 3)
        )
      ) : (
        <NothingHere>There doesn't seem to be anything here...</NothingHere>
      )}
      <Link to="/projects">
        <FullSectionLink>See my full list of projects</FullSectionLink>
      </Link>
    </React.Fragment>
  )
}

export default Home
