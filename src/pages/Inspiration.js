import React, { useState, useEffect } from "react"
import PageHeader from "../components/PageHeader.js"

const Projects = () => {
  // const [isLoading, setIsLoading] = useState(true)
  // const [imageData, setImageData] = useState([])

  // const moodboardUrl =
  //   "https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/media?folder=mood-boards&pretty=true&read_key=rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp&limit=20&props=imgix_url"
  // const paletteUrl =
  //   "https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/media?folder=colour-palettes&pretty=true&read_key=rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp&limit=20&props=imgix_url"

  // useEffect(() => {
  //   const fetchData = async url => {
  //     try {
  //       const res = await fetch(url)
  //       const data = await res.json()
  //       setImageData([...data.imageData, ...data.media])
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData(moodboardUrl)
  //   fetchData(paletteUrl)
  // })

  // console.log(imageData)

  return (
    <React.Fragment>
      <PageHeader text="Inspiration" />
      <p style={{ textAlign: "center" }}>Page coming soon.</p>
    </React.Fragment>
  )
}

export default Projects
