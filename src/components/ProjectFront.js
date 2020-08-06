import React from "react"
import styled from "styled-components"

const ProjectFrontContainer = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  margin: 6vh 5%;
  padding-bottom: 5rem;
  overflow: hidden;
  border: 1px solid #999;
  background: white;

  & .mood-image {
    width: 100%;
    height: 178px;
    overflow: hidden;

    & img {
      min-height: 238px;
      width: 100%;
      margin-top: -50px;
    }
  }

  & .project-header {
    position: relative;
    margin-top: 100px;
    margin: 100px 5% 20px;
    height: auto;
    width: 90%;
    text-transform: uppercase;
    font-size: 1.6em;
    font-weight: 400;
    text-align: center;
    color: #000;
  }

  & .project-blurb {
    height: 127px;
    width: 80%;
    margin-top: 5px;
    margin-left: 10%;
    font-size: 1em;
    text-align: center;
    color: #000;
  }

  & .project-thumbnail {
    position: absolute;
    top: 78px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 178px;
    height: 178px;
    overflow: hidden;
    border: 5px solid #fcfcfc;

    & img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
    }
  }

  & .read-more {
    display: block;
    width: auto;
    margin-left: 50%;
    margin-top: -3%;
    transform: translateX(-50%);
    border: none;
    text-align: center;
    font-weight: 700;
    color: #566573;
  }

  @media (min-width: 800px) {
    max-width: 43vw;
    width: auto;
    height: 480px;
    margin: 0 0 1rem 0;
  }

  @media (min-width: 1200px) {
    width: 100%;
    height: 480px;
  }
`

const ProjectFront = props => {
  return (
    <ProjectFrontContainer>
      <div className="mood-image">
        <img
          src={props.moodsrc}
          alt={
            "Used to convey the mood, colour palette, or feel of a design or moodboard."
          }
        />
      </div>
      <h2 className="project-header">
        <span>{props.title}</span>
      </h2>
      <p className="project-blurb">{props.blurb}</p>
      <div className="project-thumbnail">
        <img
          src={props.thumbnailsrc}
          alt={"A photograph of the interior or project so far."}
        />
      </div>
    </ProjectFrontContainer>
  )
}

export default ProjectFront
