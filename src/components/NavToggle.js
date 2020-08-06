import React from "react"
import styled, { css } from "styled-components"

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 4.5rem;
  height: 4.5rem;
  background: rgba(var(--primary-rgb), 0.98);
  border-radius: 100%;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  z-index: 99999;

  ${props =>
    props.navIsOpen &&
    css`
      background: var(--text-white);
      box-shadow: none;
    `}
`

const Hamburger = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 1rem;
  width: 2.5rem;
  height: 2rem;
`

const Bar = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--text-white);

  ${props =>
    props.navIsOpen &&
    css`
      background: var(--primary);
    `}
`
const NavToggle = props => {
  return props.mediaWidth < 1280 ? (
    <ToggleContainer
      onClick={props.handleClick}
      navIsOpen={props.navIsOpen}
      media={props.mediaWidth}
    >
      <Hamburger>
        <Bar style={{ top: "0" }} navIsOpen={props.navIsOpen} />
        <Bar
          style={{ top: "50%", transform: "translateY(-50%)" }}
          navIsOpen={props.navIsOpen}
        />
        <Bar style={{ bottom: "0" }} navIsOpen={props.navIsOpen} />
      </Hamburger>
    </ToggleContainer>
  ) : null
}

export default NavToggle
