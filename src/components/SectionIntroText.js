import React from "react"
import styled from "styled-components"

const SectionIntroContainer = styled.div`
  padding: 0 5%;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 5rem;
`
const SectionIntroTitle = styled.h3`
  width: 80%;
  margin-left: 10%;
  text-transform: capitalize;
  display: block;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: var(--ls-narrow);
  padding: 0 2rem 0.25rem;
  border-bottom: 0.125rem solid var(--primary);
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

const SectionIntroText = props => {
  return (
    <SectionIntroContainer>
      <SectionIntroTitle>{props.title}</SectionIntroTitle>
      <p>{props.content}</p>
    </SectionIntroContainer>
  )
}

export default SectionIntroText
