import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import ProjectFront from "../components/ProjectFront"
import PageHeader from "../components/PageHeader.js"

const ProjectCollectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;

    &::after {
      content: "";
      flex: auto;
    }
  }
`

const ProjectCollection = props => {
  const projectsArray = props.data.map(project => {
    return (
      <Link to={`projects/${project.slug}`} key={project.slug}>
        <ProjectFront
          moodsrc={project.metadata.post_mood_image.url}
          title={project.title}
          blurb={project.metadata.post_blurb}
          thumbnailsrc={project.metadata.post_thumbnail.url}
        />
      </Link>
    )
  })

  return (
    <React.Fragment>
      <PageHeader text="Projects" />
      <ProjectCollectionContainer>
        {props.loading ? <p>Lading...</p> : projectsArray}
      </ProjectCollectionContainer>
    </React.Fragment>
  )
}

export default ProjectCollection
