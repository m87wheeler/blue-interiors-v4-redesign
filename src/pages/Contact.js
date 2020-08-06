import React from "react"
import styled from "styled-components"

import PageHeader from "../components/PageHeader.js"
import ContactForm from "../components/ContactForm"

const ContactFormContainer = styled.main`
  width: 100%;
  height: auto;
  background-color: #566573;
  padding: 10vh 0;
`

const Projects = () => {
  return (
    <React.Fragment>
      <PageHeader text="Contact" />
      <ContactFormContainer>
        <ContactForm />
      </ContactFormContainer>
    </React.Fragment>
  )
}

export default Projects
