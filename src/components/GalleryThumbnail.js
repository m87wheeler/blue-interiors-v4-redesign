import React, { useState } from "react"
import styled from "styled-components"

const ThumbnailWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`

const PreLoadImg = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${props =>
    `${Math.round((props.height / props.width) * 100)}%`};
  background: #333;
`

const GalleryThumbnail = props => {
  // eslint-disable-next-line
  const [isVisible, setIsVisible] = useState(true)

  return (
    <ThumbnailWrapper
      className={props.className}
      onClick={props.onClick}
      data-src={props.index}
    >
      {isVisible ? (
        <Image src={props.src} alt="gallery item" data-src={props.index} />
      ) : (
        <PreLoadImg height={props.height} width={props.width} />
      )}
    </ThumbnailWrapper>
  )
}

export default GalleryThumbnail
