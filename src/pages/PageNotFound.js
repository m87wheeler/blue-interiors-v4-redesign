import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "../components/Button"

const Wrapper = styled.div`
  width: 100%;
  min-height: 48vh;
  position: relative;
`

const Page404 = styled.p`
  position: absolute;
  top: 40vh;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`

const BackButton = styled(Button)`
  position: absolute;
  top: 49vh;
  left: 50%;
  transform: translateX(-50%);
`

const PageNotFound = () => {
  return (
    <Wrapper>
      <Page404>It looks like this page doesn't exist yet.</Page404>
      <Link to="/">
        <BackButton center primary>
          GO BACK
        </BackButton>
      </Link>
    </Wrapper>
  )
}

export default PageNotFound
