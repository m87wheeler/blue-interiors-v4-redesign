import React from "react"
import { Link } from "react-router-dom"
import styled, { css, keyframes } from "styled-components"

const NavContainer = styled.nav`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: calc(100% - 2rem);
  height: 0;
  overflow: hidden;
  z-index: 10;
  transition: all 0s linear;
  transition-delay: 0.2s;
  z-index: 9999;

  ${props =>
    props.navIsOpen &&
    css`
      height: calc(100vh - 2rem);
      transition: all 0s linear;
    `}

  @media (min-width: 1280px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    background: white;
    transition: none;
    overflow: visible;
    z-index: 99;
  }
`

const NavExpand = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  background: rgba(var(--primary-rgb), 0.98);
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
  z-index: 999;

  ${props =>
    props.navIsOpen &&
    css`
      transform: scaleX(50) scaleY(50);
    `}

  @media (min-width: 1280px) {
    display: none;
  }
`

const closeAnim = keyframes`
    from   {
       margin-top: 10%;
    }
    to {
        margin-top: -100vh;
    }
`

const openAnim = keyframes`
  from {
    margin-top: -100vh;
  }
  to {
    margin-top: 10%;
  }
`

const NavUnorderedList = styled.ul`
  position: relative;
  width: 80%;
  height: 80%;
  margin: 10%;
  animation: ${closeAnim} 0s linear forwards;
  animation-delay: 0.3s;
  opacity: 0;
  transition: opacity 0.1s ease;
  z-index: 9999;

  ${props =>
    props.navIsOpen &&
    css`
      opacity: 1;
      animation: ${openAnim} 0s linear forwards;
    `}

  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 50%;
    margin: 0;
    width: auto;
    height: 100%;
    z-index: 9999;
    animation: none;
    opacity: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 2.25rem 0;
  }
`

const NavLink = styled.li`
  position: relative;
  margin-bottom: 0.5rem;
  font-family: "Poppins";
  font-size: 2.25rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: var(--ls-normal);
  color: var(--text-white);
  text-align: center;

  @media (min-width: 1280px) {
    width: 13rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-black);

    &:hover {
      text-decoration: underline;
    }
  }
`

const MainNav = props => {
  return (
    <NavContainer navIsOpen={props.navIsOpen}>
      <NavUnorderedList navIsOpen={props.navIsOpen}>
        <Link to="/" onClick={props.toggleNav}>
          <NavLink>Home</NavLink>
        </Link>
        <Link to="/about" onClick={props.toggleNav}>
          <NavLink>About</NavLink>
        </Link>
        <Link to="/services" onClick={props.toggleNav}>
          <NavLink>Services</NavLink>
        </Link>
        <Link to="/projects" onClick={props.toggleNav}>
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="/blog" onClick={props.toggleNav}>
          <NavLink>Blog</NavLink>
        </Link>
        {/* <Link to="/inspiration" onClick={props.toggleNav}>
          <NavLink>Inspiration</NavLink>
        </Link> */}
        <Link to="/contact" onClick={props.toggleNav}>
          <NavLink>Contact</NavLink>
        </Link>
      </NavUnorderedList>
      <NavExpand navIsOpen={props.navIsOpen} />
    </NavContainer>
  )
}

export default MainNav
