import React from "react"
import styled from "styled-components"

import MW_Logo from "../assets/images/vector-images/logo192.png"

const FooterContainer = styled.footer`
  width: 100%;
  height: 40vh;
  margin-top: 5rem;
  background-color: var(--primary);
  text-align: center;
  @media (min-width: 600px) {
    height: 90vh;
  }
  @media (min-width: 600px) {
    height: 35vh;
    width: 160%;
    margin-left: -30%;
  }
`

const DevLogoContainer = styled.div`
  display: block;
  width: 100%;
  height: 11rem;
  text-align: center;
  margin-bottom: 1rem;
`

const DevLogo = styled.img`
  margin: 5vh 0 0;
  width: 75px;
  height: 75px;
  background-color: var(--text-white);
  border: 4px solid var(--text-white);
  border-radius: 100%;
`

const DevTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-weight: 300;
  width: 80%;
  margin-left: 10%;
  color: #fff;
`
// eslint-disable-next-line
const Sitemap = styled.a`
  display: block;
  color: white;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 3vh;
`

const Disclaimers = styled.div`
  color: var(--text-white);
  font-family: "Poppins", sans-serif;
`

const Footer = () => {
  return (
    <FooterContainer>
      <DevLogoContainer>
        <a
          href="https://www.martinwheelerweb.com/"
          style={{ textDecoration: "none" }}
        >
          <DevLogo src={MW_Logo} alt="Web Developer and Designer Logo" />
          <DevTitle>Martin Wheeler Web Development &amp; Design</DevTitle>
        </a>
      </DevLogoContainer>
      {/* <Sitemap href="/home">SITEMAP</Sitemap> */}
      <Disclaimers>
        <p
          style={{
            fontSize: "0.7em",
          }}
        >
          &copy; 2020 Blue Interiors
        </p>
        <p
          style={{
            fontSize: "0.7em",
          }}
        >
          &copy; 2020 MW Development &amp; Design
        </p>
      </Disclaimers>
    </FooterContainer>
  )
}

export default Footer
