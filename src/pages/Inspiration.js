import React, { useState, useEffect } from "react"
import styled from "styled-components"

import PageHeader from "../components/PageHeader.js"
import GalleryThumbnail from "../components/GalleryThumbnail"

const GalleryImage = styled(GalleryThumbnail)`
  width: 100%;
  height: auto;
  overflow: hidden;
  cursor: pointer;
`

const GalleryWrapper = styled.main`
  width: 100%;
  height: auto;
  padding: 1rem;
  column-count: 3;
  column-gap: 1em;

  /* @media (max-width: 1365px) {
    column-count: 4;
  } */
  /* @media (max-width: 1800px) {
    column-count: 3;
  } */
  @media (max-width: 1320px) {
    column-count: 2;
  }
  @media (max-width: 599px) {
    column-count: 1;
  }
`

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [mediaData, setMediaData] = useState([])

  // const moodboardUrl =
  //   "https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/media?folder=mood-boards&pretty=true&read_key=rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp&limit=20&props=imgix_url"
  // const paletteUrl =
  //   "https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/media?folder=colour-palettes&pretty=true&read_key=rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp&limit=20&props=imgix_url"
  const interiorsUrl =
    "https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/media?folder=interiors&pretty=true&read_key=rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp&limit=20&props=imgix_url,"

  const fetchData = () => {
    try {
      // const moodArr = async () => {
      //   const res = await fetch(moodboardUrl)
      //   const data = await res.json()
      //   return data.media
      // }
      // const paletteArr = async () => {
      //   const res = await fetch(paletteUrl)
      //   const data = await res.json()
      //   return data.media
      // }
      const interiorsArr = async () => {
        const res = await fetch(interiorsUrl)
        const data = await res.json()
        return data.media
      }
      Promise.all([interiorsArr()]).then(values => {
        const newArr = [...values[0]] // use to concatenate multiple fetch arrays
        console.log(newArr)
        setMediaData(newArr)
        setIsLoading(false)
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <PageHeader text="Inspiration" />
      <GalleryWrapper>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          mediaData.map(img => (
            <GalleryImage
              key={img.imgix_url}
              src={`${img.imgix_url}?auto=format,compress&w=200&dpr=2`}
            />
          ))
        )}
      </GalleryWrapper>
    </React.Fragment>
  )
}

export default Projects
