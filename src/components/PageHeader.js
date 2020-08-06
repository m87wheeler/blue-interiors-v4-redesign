import React from "react"
import styled from "styled-components"

const HeaderTitle = styled.h3`
  width: 70%;
  margin: 13rem 0 2rem;
  padding: 0.5rem 0 0.5rem 1rem;
  background: var(--primary);
  color: var(--text-white);
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: var(--ls-narrow);
`

const PageHeader = props => {
  return <HeaderTitle>{props.text}</HeaderTitle>
}

export default PageHeader
