// Tool Imports
import React from "react"
import styled from "styled-components"

import PageHeader from "../components/PageHeader"
import portraitImage from "../assets/images/hero-images/portrait-image.jpg"

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(9, auto);
  }
`

const PortraitImage = styled.img`
  width: 80%;
  height: auto;
  margin: 0 10% 3rem;

  @media (min-width: 600px) and (orientation: portrait) {
    max-width: 50%;
    margin: 0 auto 3rem;
  }

  @media (min-width: 800px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 9;
  }
`

const AboutParagraph = styled.p`
  width: 90%;
  margin: 0 5% 2rem;
  line-height: 1.5rem;
  text-align: justify;

  @media (min-width: 800px) {
    grid-column: 2 / span 1;
  }
`

const About = () => {
  return (
    <React.Fragment>
      <PageHeader text="About Me" />
      <AboutPageContainer>
        <PortraitImage src={portraitImage} alt="Interior Designer" />
        <AboutParagraph>Hi, I'm Agne.</AboutParagraph>

        <AboutParagraph>
          I’m an independent interior designer based in London. I have been
          working with interior design since 2013, starting professionally as an
          interior design consultant for NEXT Home. A few years later I
          continued my career with IKEA, and here I developed skills in not only
          creating amazing interiors but also learning and building my knowledge
          of people’s everyday lives and needs, and really understanding the
          importance of function in design.
        </AboutParagraph>

        <AboutParagraph>
          I have met so many people with so many different needs, expectations,
          hobbies and lifestyles. I am proud to say that this almost seven years
          of experience has taught me a lot!
        </AboutParagraph>

        <AboutParagraph>
          To be an interior designer was always my dream and my life goal. I
          couldn't imagine myself in any other job - nothing else gives me so
          much satisfaction as creating beautiful interiors. For me, being an
          interior designer isn’t just a job. It’s a lifestyle.
        </AboutParagraph>

        <AboutParagraph>
          My imagination works overtime and ideas are always running through my
          head. The best thing about my everyday life is that I get to do what I
          love the most and I can share it with people, I can educate them on
          the joys of a beautiful and functional interior, and can lead them to
          the final stage of their perfect homes.
        </AboutParagraph>

        <AboutParagraph>
          I take my job very seriously as I understand the big step it can be to
          welcome a new person into your home and share your lifestyle with
          them. That being said, I always feel like I am a part of the family
          whilst we are working on the project, where everybody in the home has
          a special say in what they would like their home to be to them.
        </AboutParagraph>

        <AboutParagraph>
          I like to communicate all the time, I like to know all of your
          expectations, and your everyday struggles at home to really understand
          what we are expecting from this interior.
        </AboutParagraph>

        <AboutParagraph>
          My goal is to create the interior that satisfies not just your eyes,
          but your everyday life as well. I want to see my final product as
          perfection. I want to know that you’re excited to go back home, not
          just after your hard working day but also after an amazing holiday or
          simply a day out.
        </AboutParagraph>

        <AboutParagraph>
          I want you to be proud of your home. I want you to be able to show off
          your home. I want your home to be the most comfortable place in your
          life.
        </AboutParagraph>
      </AboutPageContainer>
    </React.Fragment>
  )
}

export default About
