import React from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"

import mainLogo from "../assets/images/vector-images/logo384.png"

const LogoContainer = styled.div`
  position: absolute;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 11rem;
  text-align: center;
  z-index: 99;

  @media (min-width: 800px) {
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 9.6rem;
    height: 9.6rem;
    padding: 0;
  }

  @media (min-width: 1280px) {
    top: 1rem;
    left: 20%;
    position: fixed;
    background: transparent;
  }
`

const LandingMainLogo = styled(LogoContainer)`
  position: relative;
  width: 100%;
  height: 100%;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  & img,
  & h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  & img {
    top: 4rem;
    width: 16rem;
    height: 16rem;
    filter: brightness(1000%);
  }

  & h1 {
    top: 21rem;
    font-size: 2.2rem;
    color: var(--text-white);
  }

  @media (min-width: 800px) {
    display: none;
  }
`

const MainLogoImage = styled.img`
  width: 8rem;
  height: 8rem;

  @media (min-width: 800px) {
    display: block;
    width: 7rem;
    height: 7rem;
    margin-left: 1.3rem;
    filter: none;
  }
  @media (min-width: 1280px) {
    top: 0;
  }
`

const LogoText = styled.h1`
  font-weight: 300;
  font-size: 1.25rem;
  margin-top: -0.5rem;
  margin-left: 0.4rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: var(--ls-normal);
  z-index: 999;

  @media (min-width: 800px) {
    font-size: 1rem;
    top: 7.25rem;
    margin: 0;
    margin-left: 0.4rem;
    color: var(--primary);
    font-weight: 400;
  }

  @media (min-width: 1280px) {
    left: 0;
    top: 7rem;
    display: inline-block;
    width: 9.25rem;
  }
`

const MainLogo = ({ className }) => {
  let location = useLocation()
  console.log(location.pathname)

  if (location.pathname === "/" && window.innerWidth < 800) {
    console.log("big logo")
    return (
      <LandingMainLogo className={className}>
        <MainLogoImage src={mainLogo} alt="Blue Interiors Logo" />
        <LogoText>INTERIORS</LogoText>
      </LandingMainLogo>
    )
  } else {
    console.log("small logo")
    return (
      <LogoContainer className={className}>
        <MainLogoImage src={mainLogo} alt="Blue Interiors Logo" />
        <LogoText>INTERIORS</LogoText>
      </LogoContainer>
    )
  }
}

export default MainLogo
