import React from "react"
import styled from "styled-components"

import landingImage from "../assets/images/hero-images/hero-mobile.png"
import LandingText from "./LandingText"

const LandingSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding-top: -10rem;

  @media (min-width: 800px) {
    height: 100vh;
    top: -10rem;
    z-index: 9;
  }

  @media (min-width: 1200px) {
    width: 100%;
    display: grid;
    grid-template-rows: 15rem auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      " . . "
      "intro-text landing-img";
  }
`

const LangingImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 0;

  @media (min-width: 600px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  @media (min-width: 800px) {
    top: calc(50% - 15.25rem);
    left: 38%;
    width: 85%;
    height: 60vh;
    z-index: 1;
  }
  @media (min-width: 1200px) {
    grid-area: landing-img;
    width: 100%;
    top: 0;
    left: 0%;
  }
`

const LandingImage = styled.img`
  position: absolute;
  top: 0;
  left: -15%;
  height: 100%;
  width: auto;
  filter: brightness(0.6);

  @media (min-width: 600px) {
    width: 100%;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    height: auto;
  }

  @media (min-width: 800px) {
    left: 0;
    width: 100%;
    height: auto;
    filter: brightness(1);
  }
`

const PositionLandingText = styled(LandingText)`
  display: none;

  @media (min-width: 800px) {
    display: block;
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    width: 70%;
    max-height: 30rem;
    height: auto;
    z-index: 12;
  }

  @media (min-width: 1280px) {
    position: relative;
    top: 0;
    transform: none;
    grid-area: intro-text;
    width: 100%;
    padding-right: 20%;
  }
`

const Landing = props => {
  return (
    <LandingSection>
      <PositionLandingText />
      <LangingImageContainer>
        <LandingImage src={landingImage} alt="home interior" />
      </LangingImageContainer>
    </LandingSection>
  )
}

export default Landing
