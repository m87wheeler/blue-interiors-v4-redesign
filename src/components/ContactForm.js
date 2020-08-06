import React from "react"
import styled from "styled-components"

import Button from "./Button"

const FormContainer = styled.form`
  width: 100%;

  input,
  select,
  textarea {
    width: 80%;
    margin-left: 10%;
    font-size: 1.1em;
    padding: 0.3em 1em;
    border: none;
    margin-bottom: 3vh;
    background-color: $primaryDark;
    color: $white;
    border-bottom: 2px solid $white;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    background-color: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::placeholder,
  textarea::placeholder {
    color: $primaryLight;
  }

  option {
    background-color: $white;
    color: $text;
  }

  input[type="submit"] {
    background-color: $white;
    color: $primaryDark;
  }

  textarea {
    height: 18vh;
  }

  label {
    margin-left: 10%;
    color: $white;
  }

  #form-file {
    border: none;
    padding: 10px 0;
  }

  .submit-response {
    font-size: 1.75em;
    color: $white;
    margin-left: 10%;
  }

  @media (min-width: 800px) {
    width: 60%;
    margin: 0 20%;
  }
`

const CenterButton = styled(Button)`
  display: block;
  margin: 0 auto;
`

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <FormContainer
        onSubmit={this.submitForm}
        action="https://formspree.io/mdownbdd"
        method="POST"
      >
        <input type="text" name="name" id="form-name" placeholder="NAME*" />
        <input type="email" name="email" id="form-email" placeholder="EMAIL*" />
        <input
          type="number"
          name="number"
          id="form-number"
          placeholder="PHONE"
        />
        <select name="query-type" id="query-type">
          <option value="">Choose your query type</option>
          <option value="full-project">Full interior design project</option>
          <option value="concept">Design concept</option>
          <option value="one-question">One question</option>
          <option value="general">General / Other</option>
        </select>
        <textarea
          name="more-info"
          id="form-info"
          placeholder="Please give a brief description of your request..."
        ></textarea>
        {status === "SUCCESS" ? (
          <p className="submit-response">Thanks!</p>
        ) : (
          <CenterButton center>SUBMIT</CenterButton>
        )}
        {status === "ERROR" && (
          <p className="submit-response">Ooops! There was an error.</p>
        )}
      </FormContainer>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
