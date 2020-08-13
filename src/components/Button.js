import React from "react"
import styled, { css } from "styled-components"

const StyledButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: #fff;
  color: var(--text-black);
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  ${props =>
    props.primary &&
    css`
      background: var(--primary);
      color: var(--text-white);
      border: 3px solid var(--primary);
    `}

  ${props =>
    props.border &&
    css`
      background: var(--text-white);
      color: var(--primary);
      border: 3px solid var(--primary);
      transition: all 0.3s ease-in-out;

      &:hover {
        background: var(--primary);
        color: var(--text-white);
      }
    `}

  ${props =>
    props.center &&
    css`
      display: block;
      margin: 0 auto;
    `}

    ${props =>
      props.wide &&
      css`
        display: block;
        margin: 0 auto;
        width: 100%;
      `}
`

const Button = props => {
  return (
    <StyledButton
      className={props.className}
      center={props.center}
      primary={props.primary}
      border={props.border}
      wide={props.wide}
      style={props.style}
    >
      {props.children}
    </StyledButton>
  )
}

export default Button
