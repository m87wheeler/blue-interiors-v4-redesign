import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { createMarkup } from "../assets/logic/createMarkup"
import { dateFormat } from "../assets/logic/dateFormat"
import Button from "../components/Button"

const BlogPostContainer = styled.main`
  padding-top: 35vh;
  width: 100%;

  img {
    max-width: 100%;
  }

  & .post-image {
    width: 90%;
    margin: 0 5%;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;

    img {
      max-width: 100%;
      width: 100%;
    }
  }

  & video {
    max-width: 80vw;
    margin: 30px 50%;
    transform: translateX(-50%);
  }

  & h1 {
    font-family: "Playfair Display", serif;
    text-transform: capitalize;
    text-align: center;
    font-size: 2.5em;
    letter-spacing: 0.075em;
    font-weight: 400;
    margin: 5vh 5%;
    width: 90%;
  }

  & .published-date {
    text-align: center;
    color: #9aa9b7;
    font-style: italic;
  }

  & .category {
    display: none;
  }

  & .post-content {
    margin-top: 5vh;

    p {
      text-align: justify;
      margin: 0 5% 1em;

      a {
        color: #566573;
        text-decoration: underline;
      }

      a:visited {
        color: #566573;
      }
    }

    p:nth-of-type(1):first-child:first-letter {
      color: #566573;
      float: left;
      font-family: "Playfair Display", serif;
      font-size: 5em;
      line-height: 0.8em;
      padding-top: 0;
      padding-right: 8px;
      padding-left: 0;
    }

    blockquote {
      p {
        font-family: "Playfair Display", serif;
        font-size: 2em;
        line-height: 1.5em;
        width: 80%;
        margin: 0 10%;
        text-align: center;
      }

      p:nth-of-type(1):first-child:first-letter {
        color: #070707;
        font-size: 1em;
        float: none;
        padding: 0;
      }
    }

    strong {
      font-size: 1.2em;
    }

    img {
      margin-left: 50%;
      margin-top: 2vh;
      transform: translateX(-50%);
    }

    ul {
      padding: 0 5% 0 10%;

      li {
        list-style-type: square;
        margin-bottom: 1em;
        text-align: justify;
      }
    }

    table {
      max-width: 90%;
      margin: 0 5% 2rem;
      text-align: left !important;
      border: 2px solid black;

      th,
      td {
        padding: 20px;

        p {
          text-align: left !important;
        }
      }

      th {
        font-family: "Playfair Display", serif;
        font-size: 1.5em;
      }

      td {
        font-size: 0.8em;

        image {
          margin: 0;
        }
      }
    }
  }

  @media (min-width: 800px) {
    padding-top: 15vh;
    width: 80%;
    margin: -30px 10% 0;

    .post-container {
      width: 80%;
      margin-left: 10%;

      .post-content {
        p {
          font-size: 1.1em;
          line-height: 1.5em;
        }

        blockquote {
          p {
            font-size: 2.5rem;
          }
        }

        img {
          margin-left: 50%;
          transform: translateX(-50%);
          width: 60% !important;
          max-height: 60% !important;
          min-width: 60% !important;
        }

        ul {
          padding: 0 5% 0 10%;

          li {
            list-style-type: square;
            margin-bottom: 1em;
            text-align: justify;
          }
        }

        ol {
          padding: 0 5% 0 10%;

          li {
            margin-bottom: 1em;
            text-align: justify;
          }
        }
      }
    }
  }
`

const BlogPost = props => {
  const [loading, setLoading] = useState(true)
  const [postData, setPostData] = useState({})
  const slug = props.match.params.slug

  const key = "rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp"
  const url = `https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/object/${slug}?pretty=true&hide_metafields=true&read_key=${key}&props=slug,title,content,metadata,`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPostData(data.object)
        setLoading(false)
      })
  }, [loading, url])

  return (
    <BlogPostContainer className={props.className}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <article className="post-container">
          <div className="post-image">
            <img
              src={postData.metadata.post_image.imgix_url}
              alt={"A photograph representing the topic of the blog post"}
            />
          </div>

          <h1>{postData.title.toLowerCase()}</h1>

          <p className="published-date">
            <span>Posted </span>
            {dateFormat(postData.metadata.published)}
          </p>

          <div className="category">
            <div className="category-border"></div>
            <h4>{postData.metadata.post_category}</h4>
          </div>

          <div
            className="post-content"
            dangerouslySetInnerHTML={createMarkup(postData.content)}
          />
          <Link to="/blog">
            <Button primary center>
              GO BACK
            </Button>
          </Link>
        </article>
      )}
    </BlogPostContainer>
  )
}

export default BlogPost
