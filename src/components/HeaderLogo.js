import React from "react"
import styled from "styled-components"

import smallLogo from "../assets/images/vector-images/logo-blue.png"

const LogoContainer = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8.5rem;
  padding: 1.5rem 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
`
const SmallLogo = styled.img`
  height: 5rem;
`

const LogoText = styled.p`
  font-weight: 200;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: var(--ls-normal);
`

const HeaderLogo = () => {
  return (
    <LogoContainer>
      <SmallLogo src={smallLogo} alt="Blue Interiors Logo" />
      <LogoText>BLUE INTERIORS</LogoText>
    </LogoContainer>
  )
}

export default HeaderLogo
