import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { createMarkup } from "../assets/logic/createMarkup"
import Button from "../components/Button"

const ProjectPostContainer = styled.main`
  grid-area: page;
  padding-top: 35vh;

  .project-post-container {
    width: 100%;
    height: auto;
    margin-top: 6vh;
    padding: 0 2.5%;
    position: relative;
    overflow: hidden;

    .project-mood-image {
      width: 100%;
      height: 250px;
      overflow: hidden;

      img {
        width: 100%;
        margin-top: -50px;
      }
    }

    .project-thumbnail {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 250px;
      height: 250px;
      overflow: hidden;
      border: 5px solid $white;

      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
      }
    }

    h1 {
      font-weight: 700;
      font-size: 1.8em;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin: 135px 0 30px;
      text-align: center;
    }

    .post-content {
      p {
        text-align: justify;
        margin: 0 5% 1em;

        a {
          color: $primaryDark;
          text-decoration: underline;
        }

        a:visited {
          color: $primaryDark;
        }
      }

      strong {
        font-size: 1.2em;
      }

      img {
        min-width: 100%;
        width: 100%;
      }

      ul {
        padding: 0 5% 0 10%;

        li {
          list-style-type: square;
          margin-bottom: 1em;
          text-align: justify;
        }
      }

      blockquote {
        font-family: "Playfair Display", serif;
        font-size: 2em;
        line-height: 1.5em;
        width: 80%;
        margin: 0 10%;
        text-align: center;

        p:nth-of-type(1):first-child:first-letter {
          color: $text;
          font-size: 1em;
          float: none;
          padding: 0;
        }
      }
    }
  }

  @media (min-width: 800px) {
    padding-top: 10vh;
    margin-top: -30px;

    .project-post-container {
      width: 80%;
      margin-left: 10%;

      .project-mood-image {
        height: 300px;
      }

      .project-thumbnail {
        width: 300px;
        height: 300px;
      }

      .post-content {
        width: 100%;

        p {
          font-size: 1.1em;
          line-height: 1.5em;

          img {
            width: 50%;
            margin: 3vh 0 3vh 50%;
            transform: translateX(-50%);
          }
        }

        ul {
          padding: 0 5% 0 10%;

          li {
            list-style-type: square;
            margin-bottom: 1em;
            text-align: justify;
          }
        }
      }
    }
  }
`

const Project = props => {
  const [loading, setLoading] = useState(true)
  const [projectData, setProjectData] = useState({})
  const slug = props.match.params.slug

  const key = "rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp"
  const url = `https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/object/${slug}?read_key=${key}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProjectData(data.object)
        setLoading(false)
      })
  }, [loading, url])

  return (
    <ProjectPostContainer>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <article className="project-post-container">
          <div className="project-mood-image">
            <img
              src={projectData.metadata.post_mood_image.imgix_url}
              alt={
                "Used to convey the mood, colour palette, or feel of a design or moodboard."
              }
            />
          </div>
          <div className="project-thumbnail">
            <img
              src={projectData.metadata.post_thumbnail.imgix_url}
              alt={"A photograph of the interior or project so far."}
            />
          </div>
          <h1>{projectData.title}</h1>
          <div
            className="post-content"
            dangerouslySetInnerHTML={createMarkup(projectData.content)}
          />
          <Link to="/projects">
            <Button primary center>
              GO BACK
            </Button>
          </Link>
        </article>
      )}
    </ProjectPostContainer>
  )
}

export default Project
